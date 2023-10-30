"use client";

import { Attachement, Course } from "@prisma/client";
import * as z from "zod";
import axios from "axios";
import {
  File,
  Ghost,
  Loader,
  Loader2,
  Pencil,
  PlusCircle,
  X,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";

interface AttachmentsFormProps {
  initialData: Course & { attachements: Attachement[] };
  courseId: string;
}

const formSchema = z.object({
  url: z.string(),
});

export const AttachmentsForm = ({
  initialData,
  courseId,
}: AttachmentsFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/courses/${courseId}/attachments`, values);
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  const onDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
      toast.success("Attachment Deleted");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Attachments
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData.imageUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a File
            </>
          )}
          {!isEditing && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Attachments
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <>
          {initialData.attachements.length === 0 && (
            <p className="text-sm mt-2 text-slate-500 italic">
              No Attachments Yet
            </p>
          )}
          {initialData.attachements.length > 0 && (
            <div className="space-y-2">
              {initialData.attachements.map((attachment) => (
                <div
                  key={attachment.id}
                  className="flex items-center p-3 w-full bg-sky-100 border-sky-200 border text-sky-700 rounded-md"
                >
                  <File className="h-4 w-4 mr-2 flex-shrink-0" />
                  <p className="text-xs line-clamp-1">{attachment.name}</p>
                  {deletingId === attachment.id && (
                    <div className="ml-auto">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  )}
                  {deletingId !== attachment.id && (
                    <Button
                      onClick={() => onDelete(attachment.id)}
                      variant={"ghost"}
                      className="ml-auto hover:opacity-75 transition hover:bg-red-600"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="courseAttachments"
            onChange={(url) => {
              if (url) {
                onSubmit({ url: url });
              }
            }}
          />
          <div className="text-ts text-muted-foreground mt-4">
            Add anything your students might need to complete the course
          </div>
        </div>
      )}
    </div>
  );
};

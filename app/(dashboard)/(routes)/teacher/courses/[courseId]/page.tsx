import {
  BookCopy,
  BookMarked,
  CircleDollarSign,
  FilePlus2,
  LayoutDashboard,
  ListChecks,
} from "lucide-react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { IconBadge } from "@/components/icon-badge";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
import { CategoryForm } from "./_components/category-form";
import { PriceForm } from "./_components/price-form";
import { AttachmentsForm } from "./_components/attachments-form";
import { ChaptersForm } from "./_components/chapters-form";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return redirect("/");
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
      },
      include: {
        chapters: {
          orderBy: {
            position: "asc",
          },
        },
        attachements: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    const categories = await db.categry.findMany({
      orderBy: {
        name: "asc",
      },
    });

    if (!course) {
      return redirect("/");
    }

    const requiredFields = [
      course.title,
      course.description,
      course.imageUrl,
      course.price,
      course.categoryId,
      course.chapters.some((chapter) => chapter.isPublished),
    ];

    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;

    const completionText = `(${completedFields}/${totalFields})`;

    return (
      <div className="p-6">
        <div className="items-center justify-between flex">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Course Setup</h1>
            <span className="text-sm text-orange-700">
              Complete all fields {completionText}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge size={"md"} icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your course</h2>
            </div>
            <TitleForm initialData={course} courseId={course.id} />
            <DescriptionForm initialData={course} courseId={course.id} />
            <ImageForm initialData={course} courseId={course.id} />
            <CategoryForm
              initialData={course}
              courseId={course.id}
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge size={"md"} icon={ListChecks} />
                <h2 className="text-xl">Course Chapters</h2>
              </div>

              <ChaptersForm initialData={course} courseId={course.id} />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge size={"md"} icon={CircleDollarSign} />
                <h2 className="text-xl">Sell Your Course</h2>
              </div>
              <PriceForm initialData={course} courseId={course.id} />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge size={"md"} icon={FilePlus2} />
                <h2 className="text-xl">Resources & Attachments</h2>
              </div>
              <AttachmentsForm initialData={course} courseId={course.id} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error:", error);
    return <div>Error occurred.</div>;
  }
};

export default CourseIdPage;
"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Combine, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.startsWith("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button size={"sm"} variant={"ghost"}>
            <LogOut className="h-4 w-4 mr-3" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size={"sm"} variant={"ghost"}>
            {" "}
            <Combine className="mr-2 h-4 w-4" /> Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

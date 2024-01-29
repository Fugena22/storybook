"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Button size="lg" variant="destructive">
        Click me!!!
      </Button>
      <Avatar>
        <AvatarImage src="https://www.likelion.edu.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdbscqlwl7%2Fimage%2Fupload%2Fv1692603569%2Flecturers%2FAnh_Phu%25CC%2581c_uuulxv.png&w=3840&q=75" />
      </Avatar>
    </>
  );
}

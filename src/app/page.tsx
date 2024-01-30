"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <div className="flex flex-col max-w-md mx-auto items-center">
      <Button size="lg" variant="destructive">
        Click me!!!
      </Button>
      <Avatar>
        <AvatarImage src="https://www.likelion.edu.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdbscqlwl7%2Fimage%2Fupload%2Fv1692603569%2Flecturers%2FAnh_Phu%25CC%2581c_uuulxv.png&w=3840&q=75" />
      </Avatar>

      <Select>
        <SelectTrigger>
          <SelectValue className="text-center" placeholder="Chọn đi" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Male">Nam</SelectItem>
            <SelectItem value="Female">Nữ</SelectItem>
            <SelectItem value="Another">Khác</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

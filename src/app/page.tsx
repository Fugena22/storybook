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
import WaitlistForm from "@/components/ui/waitlist";

export default function Home() {
  return (
    <div className="flex flex-col max-w-md mx-auto items-center">
      <Button size="lg" variant="destructive">
        Click me!!!
      </Button>
      <Avatar>
        <AvatarImage src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/83643510_2536059313338044_8035517050673692672_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7a1959&_nc_ohc=LIAOm4vCJiAAX8ALQ6C&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBnLL4-fvUMlZJSuNmDIkruyCqAWj2HcLoFW1QfjiJ3sg&oe=65DEDE10" />
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

      <WaitlistForm />
    </div>
  );
}

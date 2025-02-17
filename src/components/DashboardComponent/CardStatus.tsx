import { Suspense } from 'react'
import { ListStatus } from "@/lib/ListStatus";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import CardSkeleton from '../CardSkeleton';

const CardStatus = () => {
  return (
    <>
      {ListStatus.map((stats, index) => {
        return (
        <Suspense fallback={<CardSkeleton/>} key={index}>
          <Card key={index} className="min-w-[300px] min-h-[150px] mt-8">
            <div className="absolute h-16 w-16 left-4 -top-5 rounded-lg shadow-lg bg-gradient-to-bl from-yellow-400 via-yellow-400 to-yellow-500 text-white bg-prim">
              <div className="w-full h-full flex justify-center items-center">
                {stats.icon}
              </div>
            </div>
            <CardHeader className="items-end">
              <CardTitle>{stats.post}</CardTitle>
              <CardDescription>{stats.title}</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="mt-2 flex justify-between items-center">
              <p>Last Update</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="default" asChild className="rounded-full h-8 color-primary">
                      <Link href={stats.link}>{stats.iconButton}</Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>go to <span className="font-bold">{stats.title}</span> page</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardContent>
          </Card>
        </Suspense>
        );
      })}
    </>
  );
};

export default CardStatus;

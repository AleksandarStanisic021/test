import { SkipProps } from "./tools/SkipProps";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

export default async function Skip(props: SkipProps) {
  return (
    <div className="flex justify-center gap-1.5 mb-4">
      <Card>
        <CardHeader>
          <CardDescription>
            <p>Hire Period: {props.hire_period_days} days</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/big-skip.jpg"
            alt={`Image of skip ${props.id}`}
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <p>Price (inc. VAT): £{(props.price_before_vat * 1.2).toFixed(2)}</p>
          <p>Location: {props.postcode}</p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

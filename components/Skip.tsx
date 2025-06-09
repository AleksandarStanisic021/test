import { SkipProps } from "./tools/SkipProps";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

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
  console.log("Skip component props:", props);
  return (
    <div className="flex justify-center gap-1.5 mb-4">
      <Card>
        <CardHeader>
          <CardDescription>
            <Badge
              className="ml-2"
              style={{
                display: "inline-block",
                fontSize: "14px",
                backgroundColor: "blue",
                color: "white",
                padding: "4px 8px",
              }}
              variant="secondary">
              {props.size} Yards
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/big-skip.jpg"
            alt={`Image of skip ${props.id}`}
            width={200}
            height={100}
            className="rounded-lg mb-4"
          />
          <CardTitle>{props.size} Yard Skip</CardTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "8px",
            }}>
            <Badge className="ml-2" variant="secondary">
              <p>{props.hire_period_days} day hire period</p>
            </Badge>
            <Badge className="ml-2 bg-red-600 text-white">
              £{(props.price_before_vat * 1.2).toFixed(2)}
            </Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button style={{ backgroundColor: "blue", color: "white" }}>
            Book Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

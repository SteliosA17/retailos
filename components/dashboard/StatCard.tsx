import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: ReactNode;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white hover:border-zinc-700 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-zinc-400">
          {title}
        </CardTitle>

        {icon && (
          <div className="text-zinc-500">
            {icon}
          </div>
        )}
      </CardHeader>

      <CardContent>
        <div className="text-3xl font-bold">
          {value}
        </div>

        {subtitle && (
          <p className="mt-2 text-sm text-zinc-500">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

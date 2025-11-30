import { MoveRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

function Hero() {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <div className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">هللوو!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-xl md:text-3xl max-w-lg tracking-tighter font-regular">
                حصون العربية لأنظمة MEP الإنشائية
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md mt-4 mb-4 ">
              نقدم حلولاً هندسية شاملة بأعلى معايير الجودة والسلامة.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                استشارة فورية <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                ابدأ مشروعك <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="aspect-square relative">
            <InteractiveRobotSpline
              scene={ROBOT_SCENE_URL}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };


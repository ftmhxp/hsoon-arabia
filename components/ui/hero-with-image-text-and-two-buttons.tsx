import { MoveRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

function Hero() {
  const ROBOT_SCENE_URL = "https://prod.spline.design/QEAWSPZFLyq0WhhR/scene.splinecode";

  return (
    <div className="w-full py-20 lg:py-40 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 249, 145, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
          `,
        }}
      />
      <div className="container mx-auto mt-24 px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit mx-auto px-4 py-2 text-sm font-medium animate-appear opacity-0 delay-100">
              شريكك في المشاريع الإنشائية المتكاملة
              </Badge>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-10xl lg:text-center font-bold tracking-tight text-gray-900 leading-tight animate-appear opacity-0 delay-300">
                  حصون العربية
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl lg:text-center font-semibold text-gray-700 tracking-tight animate-appear opacity-0 delay-300">
                  لأنظمة MEP الإنشائية
                </h2>
              </div>

              <p className="text-lg md:text-xl leading-relaxed lg:text-center text-gray-600 max-w-2xl mx-auto lg:ml-auto lg:mr-0 animate-appear opacity-0 delay-500">
                نقدم حلولاً هندسية شاملة بأعلى معايير الجودة والسلامة لتحقيق رؤيتك الإنشائية.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-20 justify-center pt-4 animate-appear opacity-0 delay-700">
              <Button size="lg" className="gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                ابدأ مشروعك
                <MoveRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-3 border-2 border-gray-300 hover:border-primary hover:bg-primary/5 px-8 py-4 text-lg font-semibold transition-all duration-300">
                <PhoneCall className="w-5 h-5" />
                استشارة فورية
              </Button>
            </div>
          </div>

          {/* 3D Robot Section */}
          <div className="relative animate-appear opacity-0 delay-700">
            <div className="aspect-square max-w-lg mx-auto relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20"></div>

              <div className="relative w-full h-full p-8">
                <InteractiveRobotSpline
                  scene={ROBOT_SCENE_URL}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export { Hero };


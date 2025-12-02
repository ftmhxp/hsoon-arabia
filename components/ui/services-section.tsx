import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderTrail } from "@/components/ui/border-trail";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Zap, Wrench, Shield, Flame, Settings, Sun } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "أنظمة الكهرباء",
      description: "تصميم وتركيب أنظمة الكهرباء بأحدث المعايير والتقنيات، مع ضمان السلامة والكفاءة العالية لجميع المشاريع السكنية والتجارية."
    },
    {
      icon: Wrench,
      title: "أنظمة السباكة",
      description: "حلول متكاملة لأنظمة السباكة والصرف الصحي، تشمل تركيب الأنابيب والمحابس والمعدات باستخدام مواد عالية الجودة تدوم طويلاً."
    },
    {
      icon: Settings,
      title: "أنظمة التكييف والتهوية",
      description: "تصميم وتركيب أنظمة HVAC متطورة تضمن الراحة المثالية وتوفير الطاقة، مع مراعاة كفاءة التشغيل والصيانة السهلة."
    },
    {
      icon: Flame,
      title: "أنظمة مكافحة الحريق",
      description: "تركيب أنظمة إطفاء الحريق المتقدمة والمتوافقة مع جميع المعايير الدولية، لحماية المباني والأرواح في حالات الطوارئ."
    },
    {
      icon: Shield,
      title: "أنظمة الأمان والحماية",
      description: "حلول شاملة لأنظمة الأمان تشمل الكاميرات والإنذار والتحكم في الوصول، مع ضمان حماية كاملة للممتلكات والأشخاص."
    },
    {
      icon: Sun,
      title: "الطاقة المتجددة",
      description: "تصميم وتركيب أنظمة الطاقة الشمسية والمتجددة الأخرى، لتوفير الطاقة النظيفة وتقليل التكاليف التشغيلية على المدى الطويل."
    }
  ];

  return (
    <div className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">خدماتنا</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            خدمات MEP المتكاملة
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات أنظمة MEP الإنشائية بأعلى معايير الجودة
            والدقة، لضمان راحة وسلامة جميع المشاريع.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <SpotlightCard key={index} className="relative bg-white border border-primary/10 shadow-lg overflow-hidden h-full">
                <BorderTrail
                  style={{
                    boxShadow:
                      "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
                  }}
                  size={100}
                />
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mr-4">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى خدمات MEP لمشروعك؟</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية وتقدير دقيق لاحتياجات مشروعك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              احصل على استشارة مجانية
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              عرض أعمالنا
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

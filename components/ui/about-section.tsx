import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderTrail } from "@/components/ui/border-trail";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { CheckCircle, Award, Users, Zap, Wrench, Shield } from "lucide-react";

export function AboutSection() {
  return (
    <div className="w-full py-20 lg:py-40 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">من نحن</Badge>
{/*           <h1 className="text-4xl md:text-6xl font-bold mb-6">
            حصون العربية لأنظمة MEP الإنشائية
          </h1> */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نحن شركة رائدة في مجال أنظمة MEP الإنشائية، نقدم حلولاً هندسية متكاملة 
            بأعلى معايير الجودة والسلامة لمشاريع البناء في جميع أنحاء المنطقة العربية.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <SpotlightCard className="relative bg-white border border-primary/10 shadow-lg overflow-hidden">
            <BorderTrail
              style={{
                boxShadow:
                  "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
              }}
              size={100}
            />
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mr-4">رؤيتنا</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              أن نكون الشركة الرائدة في المنطقة العربية في مجال أنظمة MEP الإنشائية،
              ونقدم حلولاً مبتكرة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
            </p>
          </SpotlightCard>

          <SpotlightCard className="relative bg-white border border-primary/10 shadow-lg overflow-hidden">
            <BorderTrail
              style={{
                boxShadow:
                  "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
              }}
              size={100}
            />
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mr-4">رسالتنا</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              تقديم خدمات عالية الجودة في مجال أنظمة MEP الإنشائية باستخدام أحدث
              التقنيات والمعايير العالمية، مع الالتزام بالسلامة والاستدامة البيئية.
            </p>
          </SpotlightCard>
        </div>

        {/* Why Choose Us */}
        <SpotlightCard className="relative bg-white border border-primary/10 shadow-lg overflow-hidden">
          <BorderTrail
            style={{
              boxShadow:
                "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
            }}
            size={100}
          />
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-center mb-12">لماذا تختار حصون العربية؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">خبرة واسعة</h4>
              <p className="text-sm text-muted-foreground">
                أكثر من 15 عاماً من الخبرة في مجال MEP
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">فريق متخصص</h4>
              <p className="text-sm text-muted-foreground">
                مهندسين وفنيين معتمدين ومؤهلين
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">جودة مضمونة</h4>
              <p className="text-sm text-muted-foreground">
                الالتزام بأعلى معايير الجودة العالمية
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">ضمان شامل</h4>
              <p className="text-sm text-muted-foreground">
                ضمان شامل على جميع أعمالنا وخدماتنا
              </p>
            </div>
          </div>
          </div>
        </SpotlightCard>

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
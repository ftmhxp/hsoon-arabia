import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
	return (
		<section className="py-16 sm:py-20 lg:py-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center mb-12 lg:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
						هل تحتاج إلى خدمات حصون العربية؟
					</h2>
					<p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
						تواصل معنا اليوم للحصول على استشارة مجانية وتقدير دقيق لاحتياجات مشروعك
					</p>
				</div>

				{/* Contact Card */}
				<div className="mx-auto max-w-7xl">
					<ContactCard
						title="تواصل معنا"
						description="إذا كان لديك أي أسئلة حول خدماتنا أو تحتاج إلى مساعدة، يرجى ملء النموذج هنا. نحن نسعى جاهدين للرد خلال يوم عمل واحد."
						contactInfo={[
							{
								icon: MailIcon,
								label: 'البريد الإداري',
								value: 'projects@hsoonarabia.com',
							},
							{
								icon: PhoneIcon,
								label: 'الهاتف',
								value: '+966 557 390 868',
							},
							{
								icon: MapPinIcon,
								label: 'العنوان',
								value: 'حي العزيزية، شارع الملك عبدالعزيز، جدة، المملكة العربية السعودية',
							}
						]}
					>
						{/* Contact Form */}
						<form className="w-full space-y-4 sm:space-y-5">
							<div className="space-y-2">
								<Label className="text-sm font-medium">الاسم</Label>
								<Input
									type="text"
									placeholder="أدخل اسمك الكامل"
									className="h-11 sm:h-12"
								/>
							</div>

							<div className="space-y-2">
								<Label className="text-sm font-medium">البريد الإلكتروني</Label>
								<Input
									type="email"
									placeholder="example@email.com"
									className="h-11 sm:h-12"
								/>
							</div>

							<div className="space-y-2">
								<Label className="text-sm font-medium">رقم الهاتف</Label>
								<Input
									type="tel"
									placeholder="+966 XX XXX XXXX"
									className="h-11 sm:h-12"
								/>
							</div>

							<div className="space-y-2">
								<Label className="text-sm font-medium">الرسالة</Label>
								<Textarea
									placeholder="اكتب رسالتك هنا..."
									className="min-h-[100px] sm:min-h-[120px] resize-none"
								/>
							</div>

							<Button
								className="w-full h-11 sm:h-12 text-base font-medium mt-6"
								type="button"
							>
								إرسال الرسالة
							</Button>
						</form>
					</ContactCard>
				</div>
			</div>
		</section>
	);
}

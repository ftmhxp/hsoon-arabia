import { NavbarDemo } from "../components/ui/demo-navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarDemo />
      <div className="pt-32 px-8">
        <h1 className="text-4xl font-regular text-center mb-8 mt-50">حصون العربية لأنظمة MEP الإنشائية</h1>
        <p className="text-center text-lg">
        نقدم حلولاً هندسية شاملة بأعلى معايير الجودة والسلامة.
        </p>
      </div>
    </main>
  );
}

import { Link } from "react-router-dom";
import { HardHat, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const UnderConstruction = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-civic-gold/15 mb-6">
      <HardHat className="w-12 h-12 text-civic-gold" />
    </div>
    <h1 className="font-serif text-3xl md:text-5xl font-bold text-civic-blue mb-4">
      Page Under Construction
    </h1>
    <p className="text-muted-foreground text-base md:text-lg max-w-md mb-8">
      We're working hard to bring this page to you. Please check back soon.
    </p>
    <Button asChild variant="outline" className="border-civic-blue text-civic-blue hover:bg-civic-blue hover:text-white">
      <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
    </Button>
  </div>
);

export default UnderConstruction;

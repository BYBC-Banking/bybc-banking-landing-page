import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustpilotReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sipho Mthembu",
      rating: 5,
      title: "Excellent digital banking experience",
      review: "BYBC has transformed how I handle my finances. The app is incredibly user-friendly and the crypto integration is seamless. Finally, a bank that understands the future!",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      name: "Thandi Nkosi",
      rating: 5,
      title: "Perfect for my small business",
      review: "As a young entrepreneur, BYBC's business features are exactly what I needed. Low fees, instant transfers, and amazing customer support. Highly recommended!",
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      name: "Michael van der Merwe",
      rating: 5,
      title: "Banking reimagined",
      review: "The combination of traditional banking with crypto capabilities is brilliant. BYBC makes it so easy to manage both my rand and crypto in one place.",
      date: "3 weeks ago",
      verified: true
    },
    {
      id: 4,
      name: "Nomsa Dlamini",
      rating: 4,
      title: "Great app, fantastic features",
      review: "Love the financial education tools and the AI assistant is incredibly helpful. The app design is beautiful and everything works smoothly.",
      date: "1 week ago",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? "text-[#ffd700] fill-[#ffd700]" 
            : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0f0f23] to-[#1a1a3a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-[#ffd700] font-medium">4.8 out of 5</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Trusted by <span className="text-[#ffd700]">thousands</span> of South Africans
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            See what our customers say about their BYBC Banking experience
          </p>

          {/* Trustpilot branding */}
          <div className="flex justify-center items-center gap-2 mb-12">
            <span className="text-gray-400 text-sm">Excellent</span>
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-gray-400 text-sm">Based on 2,847 reviews</span>
            <div className="flex items-center gap-2 ml-4">
              <div className="w-6 h-6 bg-[#00b67a] rounded flex items-center justify-center">
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-[#00b67a] font-semibold text-sm">Trustpilot</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
              <CardContent className="p-6">
                {/* Rating and verification */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                  {review.verified && (
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[#00b67a] rounded-full" />
                      <span className="text-xs text-gray-400">Verified</span>
                    </div>
                  )}
                </div>

                {/* Review title */}
                <h3 className="text-white font-medium mb-3 text-sm">
                  {review.title}
                </h3>

                {/* Review content */}
                <div className="relative mb-4">
                  <Quote className="w-4 h-4 text-[#ffd700] mb-2" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {review.review}
                  </p>
                </div>

                {/* Reviewer info */}
                <div className="border-t border-gray-800 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">{review.name}</p>
                      <p className="text-gray-500 text-xs">{review.date}</p>
                    </div>
                    <div className="w-8 h-8 bg-[#ffd700] rounded-full flex items-center justify-center">
                      <span className="text-[#0f0f23] font-bold text-xs">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">
            Join thousands of satisfied customers
          </p>
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#00b67a] hover:text-[#00a371] transition-colors text-sm font-medium"
          >
            Read all reviews on Trustpilot
            <div className="w-4 h-4 bg-[#00b67a] rounded flex items-center justify-center">
              <Star className="w-3 h-3 text-white fill-white" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotReviews;
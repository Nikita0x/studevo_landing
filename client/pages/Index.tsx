import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ArrowRight,
  ExternalLink,
  Brain,
  Lightbulb,
  BookOpen,
  Zap,
  CheckCircle,
  Users,
  Clock,
} from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                AI-Powered Learning
              </Badge>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
                  Master AI tools with{" "}
                  <span className="text-primary">guided tutorials</span>
                </h1>
                <p className="text-xl text-foreground/80 max-w-lg leading-relaxed">
                  Learn AI tools effectively with our step-by-step tutorials and
                  interactive guides designed for all skill levels.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="
                https://master.studevo.com/"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 text-lg px-8 py-6 rounded-xl"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" /> Get started
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl shadow-primary/10 p-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3cbd4f482bbba1262fd66f73cd83efb7a09472dc?width=1100"
                  alt="AI learning interface"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-3">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/c0d61f1abcba39b79eea4c9ab0d534a1eddf3ed5?width=256"
                    alt="AI assistant"
                    className="w-32 h-32 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-3">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/c97cda0df3b4a23ef45eab05de82dd58f785c890?width=224"
                    alt="AI concept"
                    className="w-28 h-28 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gray-100 text-gray-600 border-gray-200">
              Features
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Everything you need to master AI tools
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Studevo combines powerful learning tools with intuitive design to
              make learning AI accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "AI-Powered Learning",
                description:
                  "Personalized learning paths that adapt to your style and pace, making complex AI concepts accessible.",
              },
              {
                icon: Lightbulb,
                title: "Interactive Tutorials",
                description:
                  "Hands-on exercises and real-world projects to reinforce your understanding of AI tools.",
              },
              {
                icon: BookOpen,
                title: "Comprehensive Guides",
                description:
                  "Step-by-step guides covering a wide range of AI tools and technologies for all skill levels.",
              },
              {
                icon: Zap,
                title: "Quick Access",
                description:
                  "Instantly find and save the tutorials you need with our smart search and bookmark system.",
              },
              {
                icon: CheckCircle,
                title: "Progress Tracking",
                description:
                  "Monitor your learning journey with detailed progress tracking and achievement milestones.",
              },
              {
                icon: Users,
                title: "Community Learning",
                description:
                  "Connect with other learners, share insights, and collaborate on AI projects in our community.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Interface Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/dce5a0db1e8c42d64e92885e61c17b4f7bea4174?width=2432"
              alt="Studevo app interface"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Designed for real learning
              </h3>
              <p className="text-lg text-foreground/80">
                Our tutorials focus on practical skills you can apply
                immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section
        id="tutorials"
        className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Tutorials
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Learn from expert-crafted tutorials
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Dive into our comprehensive collection of tutorials covering the
              latest AI tools and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/3cbd4f482bbba1262fd66f73cd83efb7a09472dc?width=764",
                title: "Getting Started with ChatGPT",
                description:
                  "Learn how to effectively use ChatGPT for various tasks and improve your productivity.",
                level: "Beginner",
                duration: "1.5 hours",
                rating: 4.8,
              },
              {
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/75bd41a6be43f8622080666afdc0ec0b34794401?width=764",
                title: "Midjourney Art Creation",
                description:
                  "Master the art of creating stunning images with Midjourney's AI image generation.",
                level: "Intermediate",
                duration: "2 hours",
                rating: 4.7,
              },
              {
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/b594d9362c42ecc8b0bdab95cd684f253878f81f?width=764",
                title: "AI Workflow Automation",
                description:
                  "Combine multiple AI tools to create powerful workflows for your projects.",
                level: "Advanced",
                duration: "3 hours",
                rating: 4.9,
              },
              {
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/4bae996697a66b318882418d1939df01737c04ee?width=764",
                title: "Exploring Stable Diffusion",
                description:
                  "Learn to generate custom images with Stable Diffusion models and prompts.",
                level: "Intermediate",
                duration: "2.5 hours",
                rating: 4.6,
              },
              {
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/ac3b2ebc4fe648dae68161f3df68ef54a4d0d79d?width=764",
                title: "Claude AI for Business",
                description:
                  "Implement Claude AI to enhance customer service and business operations.",
                level: "Business",
                duration: "2 hours",
                rating: 4.5,
              },
              {
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/e903f3aaf77157d0cc370fcdd5391040c9e3fd6e?width=764",
                title: "AI Ethics & Best Practices",
                description:
                  "Understanding ethical considerations when working with AI tools and models.",
                level: "Essential",
                duration: "1 hour",
                rating: 4.7,
              },
            ].map((tutorial, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-black/60 text-white border-0">
                    {tutorial.level}
                  </Badge>
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center text-xs">
                    <Clock className="w-3 h-3 mr-1" /> {tutorial.duration}
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-sm text-foreground/60 ml-2">
                      {tutorial.rating}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {tutorial.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {tutorial.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-sm p-12 text-center rounded-xl">
            <h2 className="text-4xl font-bold text-foreground">
              Start your AI learning journey today
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-6">
              Join thousands of learners who are mastering AI tools and
              advancing their skills with Studevo.
            </p>
            <div className="flex flex-col items-baseline justify-center sm:flex-row gap-4">
              <a
                href="
                https://master.studevo.com/"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 mt-8 text-primary-foreground shadow-lg shadow-primary/25 text-lg px-8 py-6 rounded-xl"
                >
                  <ArrowRight className="w-5 h-5 mr-2" /> Get started
                </Button>
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-8 pt-10 mt-10 border-t border-white/10">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">100+</div>
                <div className="text-foreground/70">AI tutorials</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">15k+</div>
                <div className="text-foreground/70">Active users</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">4.8</div>
                <div className="text-foreground/70">App Store rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

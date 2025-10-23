import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-50"></div>
        
        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-secondary via-primary to-accent p-1 mb-4 mx-auto">
              <img 
                src="https://cdn.poehali.dev/files/16b11af1-523c-4cfd-beaf-d779a0b3149e.jpeg"
                alt="Арина"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-4 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-fade-in">
            АРИНА
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
            <p className="text-3xl md:text-4xl font-semibold text-primary">17 лет</p>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Творческая личность с яркими идеями
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-primary to-accent rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-primary/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="GraduationCap" size={32} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-foreground">Обучение</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-lg text-muted-foreground">
                        Учусь в <span className="font-semibold text-primary">11 классе</span>
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                      <p className="text-lg text-muted-foreground">
                        Завершающий год в школе, полна планов на будущее
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                      <p className="text-lg text-muted-foreground">
                        Стремлюсь к новым знаниям и развитию
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 animate-fade-in">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="BookOpen" size={120} className="text-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              МОЁ УВЛЕЧЕНИЕ
            </h2>
            <div className="h-1.5 w-40 bg-gradient-to-r from-secondary via-primary to-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <img 
                  src="https://v3b.fal.media/files/b/tiger/bdkWfDZp3DSUknOh7SwWW_output.png"
                  alt="Творческое вдохновение"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
            </div>

            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent via-primary to-secondary rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-secondary/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                      <Icon name="Palette" size={32} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-foreground">Рисование</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Рисование — это мой способ самовыражения и побег в мир фантазий
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                          <Icon name="Sparkles" size={18} className="text-secondary" />
                        </div>
                        <p className="text-muted-foreground">Создаю яркие иллюстрации</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Icon name="Heart" size={18} className="text-primary" />
                        </div>
                        <p className="text-muted-foreground">Вкладываю душу в каждую работу</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                          <Icon name="Star" size={18} className="text-accent" />
                        </div>
                        <p className="text-muted-foreground">Постоянно развиваю навыки</p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 rounded-2xl">
                      <p className="text-sm text-center font-medium text-primary">
                        "Искусство — это язык, на котором говорит моя душа"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-primary/10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                Люблю читать
              </h2>
              
              <div className="flex items-center justify-center gap-6 mb-6">
                <Icon name="Book" size={40} className="text-primary" />
                <Icon name="BookMarked" size={40} className="text-secondary" />
                <Icon name="Library" size={40} className="text-accent" />
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Книги открывают для меня новые миры и вдохновляют на творчество. 
                Каждая история — это путешествие, которое расширяет горизонты моего воображения.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gradient-to-r from-secondary via-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-lg font-medium">
            Арина • 17 лет • Творчество • Обучение • Развитие
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
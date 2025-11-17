import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

interface Film {
  id: number;
  title: string;
  year: number;
  director: string;
  image: string;
  description: string;
}

const films: Film[] = [
  {
    id: 1,
    title: 'Интерстеллар',
    year: 2014,
    director: 'Кристофер Нолан',
    image: 'https://cdn.poehali.dev/projects/ab1912c0-458f-435b-bf4c-aac497bd4d67/files/9e912da8-038f-4a0e-a28a-fe929976823e.jpg',
    description: 'Эпическая космическая одиссея о любви, времени и выживании человечества'
  },
  {
    id: 2,
    title: 'Начало',
    year: 2010,
    director: 'Кристофер Нолан',
    image: 'https://cdn.poehali.dev/projects/ab1912c0-458f-435b-bf4c-aac497bd4d67/files/03466501-9f68-41bb-8488-72e038fb2d2f.jpg',
    description: 'Захватывающий триллер о воровстве идей через сны'
  },
  {
    id: 3,
    title: '1+1',
    year: 2011,
    director: 'Оливье Накаш',
    image: 'https://cdn.poehali.dev/projects/ab1912c0-458f-435b-bf4c-aac497bd4d67/files/9e912da8-038f-4a0e-a28a-fe929976823e.jpg',
    description: 'Трогательная история дружбы, разрушающая все барьеры'
  }
];

export default function Index() {
  const [selectedFilm, setSelectedFilm] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    phone: '',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFilm) {
      toast({
        title: 'Выберите фильм',
        description: 'Пожалуйста, выберите фильм для просмотра',
        variant: 'destructive'
      });
      return;
    }
    
    const film = films.find(f => f.id === selectedFilm);
    toast({
      title: 'Регистрация успешна! 🎬',
      description: `${formData.name}, вы записаны на просмотр "${film?.title}"`,
    });
    
    setFormData({ name: '', class: '', phone: '', date: '' });
    setSelectedFilm(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/5363994a-f619-4e90-9ec0-7f6d16300b87.jpg)' }}
      />
      
      <div className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="absolute top-10 right-10 animate-film-reel opacity-20">
            <Icon name="Film" size={120} className="text-primary" />
          </div>
          
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                  КИНОКЛУБ
                </h1>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                Муниципальное бюджетное общеобразовательное учреждение<br />
                города Ростова-на-Дону<br />
                <span className="text-primary font-semibold">
                  "Лицей № 56 имени генерал-лейтенанта Герасименко В.Ф."
                </span>
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <Icon name="Clapperboard" size={24} />
              <span className="text-sm uppercase tracking-widest">Приглашаем на киновечер</span>
              <Icon name="Popcorn" size={24} />
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-card/30 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                РЕГИСТРАЦИЯ
              </h2>
              <p className="text-muted-foreground">Заполните форму и выберите фильм</p>
            </div>

            <Card className="p-8 bg-card/80 backdrop-blur border-primary/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Имя и Фамилия</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                    className="bg-background/50 border-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="class" className="text-foreground">Класс</Label>
                  <Input
                    id="class"
                    value={formData.class}
                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                    placeholder="10А"
                    required
                    className="bg-background/50 border-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (900) 123-45-67"
                    required
                    className="bg-background/50 border-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground">Дата киновечера</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="bg-background/50 border-muted"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-primary-foreground font-semibold text-lg py-6"
                >
                  <Icon name="Ticket" size={20} className="mr-2" />
                  Зарегистрироваться
                </Button>
              </form>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ВЫБОР ФИЛЬМА
              </h2>
              <p className="text-muted-foreground">Выберите фильм для просмотра</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {films.map((film) => (
                <Card
                  key={film.id}
                  className={`group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
                    selectedFilm === film.id 
                      ? 'border-primary shadow-lg shadow-primary/50' 
                      : 'border-muted hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedFilm(film.id)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={film.image} 
                      alt={film.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm line-clamp-2">{film.description}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-card">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{film.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        {film.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="User" size={16} />
                        {film.director}
                      </span>
                    </div>
                    
                    {selectedFilm === film.id && (
                      <div className="mt-4 flex items-center gap-2 text-primary font-semibold">
                        <Icon name="Check" size={20} />
                        <span>Выбрано</span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 px-4 border-t border-primary/20 bg-card/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Film" size={32} className="text-primary" />
              <h3 className="text-2xl font-bold">КИНОКЛУБ ЛИЦЕЙ №56</h3>
            </div>
            <p className="text-muted-foreground">
              Ростов-на-Дону • 2025
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
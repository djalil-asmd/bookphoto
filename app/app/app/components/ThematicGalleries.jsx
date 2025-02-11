import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ThematicGalleries = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Données des galeries
  const themes = [
    {
      id: 'portrait',
      title: 'Portraits',
      description: 'L\'essence de l\'humain capturée dans des portraits intimes',
      coverImage: '/api/placeholder/800/500',
      photos: [
        { id: 'p1', title: 'Regard Profond', description: 'Portrait en lumière naturelle', technique: 'Éclairage naturel, 85mm f/1.4' },
        { id: 'p2', title: 'Âme Artistique', description: 'Portrait en studio', technique: 'Studio, deux softbox' },
        { id: 'p3', title: 'Expression Pure', description: 'Portrait en noir et blanc', technique: 'Éclairage mixte' },
        { id: 'p4', title: 'Lumière Dorée', description: 'Portrait au coucher du soleil', technique: 'Lumière naturelle, réflecteur' },
        { id: 'p5', title: 'Regard Intense', description: 'Portrait en clair-obscur', technique: 'Éclairage studio Rembrandt' },
      ]
    },
    {
      id: 'street',
      title: 'Street Photography',
      description: 'La vie urbaine dans son authenticité',
      coverImage: '/api/placeholder/800/500',
      photos: [
        { id: 's1', title: 'Rue Parisienne', description: 'Scène de rue à Paris', technique: '35mm f/2' },
        { id: 's2', title: 'Mouvement Urbain', description: 'Transport en commun', technique: 'Pose longue' },
        { id: 's3', title: 'Vie Nocturne', description: 'Ambiance de nuit', technique: 'High ISO' },
        { id: 's4', title: 'Reflets Urbains', description: 'Après la pluie', technique: 'Pose lente, f/8' },
        { id: 's5', title: 'Rush Hour', description: 'L\'heure de pointe', technique: 'Multiple exposition' },
      ]
    },
    {
      id: 'nature',
      title: 'Nature & Paysages',
      description: 'La beauté brute de notre environnement',
      coverImage: '/api/placeholder/800/500',
      photos: [
        { id: 'n1', title: 'Aube Dorée', description: 'Lever de soleil en montagne', technique: 'HDR, filtres ND' },
        { id: 'n2', title: 'Forêt Mystique', description: 'Sous-bois dans la brume', technique: 'Pose longue' },
        { id: 'n3', title: 'Océan Sauvage', description: 'Vagues en mouvement', technique: 'Vitesse rapide' },
        { id: 'n4', title: 'Cascade Éthérée', description: 'Chute d\'eau en pose longue', technique: 'Pose longue, filtre ND' },
        { id: 'n5', title: 'Désert Étoilé', description: 'Voie lactée sur le désert', technique: 'Pose longue nocturne' },
      ]
    }
  ];

  const ThemeGallery = ({ theme, onBack }) => (
    <div className="py-12">
      <div className="mb-8 text-center">
        <button 
          onClick={onBack}
          className="flex items-center mb-4 mx-auto text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Retour aux galeries
        </button>
        <h2 className="text-4xl font-bold mb-4 text-white">{theme.title}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">{theme.description}</p>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 p-4">
          {theme.photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              whileHover={{ 
                scale: 1.4,
                zIndex: 20,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`w-[200px] flex-none cursor-pointer relative ${index % 2 === 0 ? 'mt-12' : ''}`}
              onClick={() => setSelectedPhoto(photo)}
            >
              <Card className="overflow-hidden bg-gray-900/50 backdrop-blur-sm border-gray-800">
                <CardContent className="p-0 relative">
                  <img
                    src={`/api/placeholder/400/300`}
                    alt={photo.title}
                    className="w-full h-40 object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold text-white mb-1">{photo.title}</h3>
                      <p className="text-gray-200 text-xs">{photo.description}</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <motion.div 
        className="fixed inset-0 z-0"
        animate={{
          backgroundImage: [
            'radial-gradient(circle at 0% 0%, #1a237e 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, #1a237e 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="relative z-10">
        <header className="text-center py-16">
          <motion.h1 
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Galerie Photo
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Explorez mes différents univers photographiques
          </motion.p>
        </header>

        <main className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {selectedTheme ? (
              <ThemeGallery theme={selectedTheme} onBack={() => setSelectedTheme(null)} />
            ) : (
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex space-x-4 p-4">
                  {themes.map((theme, index) => (
                    <motion.div
                      key={theme.id}
                      whileHover={{ 
                        scale: 1.4,
                        zIndex: 20,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                      className={`w-[300px] flex-none cursor-pointer relative ${index % 2 === 1 ? 'mt-8' : ''}`}
                      onClick={() => setSelectedTheme(theme)}
                    >
                      <Card className="overflow-hidden bg-gray-900/50 backdrop-blur-sm border-gray-800">
                        <CardContent className="p-0 relative">
                          <img
                            src={theme.coverImage}
                            alt={theme.title}
                            className="w-full h-48 object-cover"
                          />
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                            initial={{ opacity: 0.6 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className="text-lg font-bold text-white mb-2">
                                {theme.title}
                              </h3>
                              <p className="text-gray-200 text-xs mb-3">
                                {theme.description}
                              </p>
                              <Button 
                                variant="outline"
                                size="sm"
                                className="text-white border-white hover:bg-white hover:text-black"
                              >
                                Explorer
                                <ChevronRight className="ml-2 h-3 w-3" />
                              </Button>
                            </div>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            )}
          </AnimatePresence>
        </main>

        <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-4xl bg-gray-900/90 backdrop-blur-sm text-white border-gray-800">
            {selectedPhoto && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{selectedPhoto.title}</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    {selectedPhoto.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-4">
                  <img
                    src={`/api/placeholder/1200/800`}
                    alt={selectedPhoto.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white">Technique</h4>
                      <p className="text-sm text-gray-400">{selectedPhoto.technique}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Description</h4>
                      <p className="text-sm text-gray-400">{selectedPhoto.description}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ThematicGalleries;

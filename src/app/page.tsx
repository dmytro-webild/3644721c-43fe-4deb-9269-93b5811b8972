"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Mail, Shield, Sparkles, Star, TrendingUp, Zap, DollarSign } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmallSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="gradient-mesh"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Nexonix"
          navItems={[
            { name: "Inicio", id: "hero" },
            { name: "Servicios", id: "services" },
            { name: "Precios", id: "pricing" },
            { name: "Contacto", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Tu equipo, siempre al máximo nivel"
          description="Montaje de ordenadores personalizados, mantenimiento preventivo y soporte técnico profesional para PYMES, autónomos y particulares que buscan rendimiento y fiabilidad."
          tag="https://www.webild.io/preview/ed8ad9b8-be85-477b-94bb-52a705bc33a8"
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aidc3onj0Uywj4IpRkqF30QNvD/a-professional-computer-hardware-assembl-1773079708512-b0f9d20e.png"
          imageAlt="Montaje profesional de hardware informático"
          mediaAnimation="slide-up"
          testimonials={[
            {
              name: "María García",              handle: "CEO, Soluciones Tech SL",              testimonial: "Excelente servicio técnico. El montaje de nuestros ordenadores fue profesional y el soporte posterior impecable.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aidc3onj0Uywj4IpRkqF30QNvD/a-diverse-team-of-professional-it-specia-1773079709273-49f951c0.png?_wi=1"
            },
            {
              name: "Carlos López",              handle: "Autónomo, Consultoría Digital",              testimonial: "Muy satisfecho con la optimización de mi sistema. Increíble mejora de rendimiento y desinfección completa.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aidc3onj0Uywj4IpRkqF30QNvD/a-diverse-team-of-professional-it-specia-1773079709273-49f951c0.png?_wi=2"
            },
            {
              name: "Ana Martínez",              handle: "Gerente, Empresa Logística",              testimonial: "El mantenimiento preventivo de Nexonix nos ha evitado muchos problemas. Profesionales de confianza.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aidc3onj0Uywj4IpRkqF30QNvD/a-diverse-team-of-professional-it-specia-1773079709273-49f951c0.png?_wi=3"
            },
            {
              name: "Juan Rodríguez",              handle: "Propietario, Estudio Gráfico",              testimonial: "Transparencia total en precios y procesos. Recomiendo Nexonix sin dudarlo a cualquiera.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Aidc3onj0Uywj4IpRkqF30QNvD/a-diverse-team-of-professional-it-specia-1773079709273-49f951c0.png?_wi=4"
            }
          ]}
          testimonialRotationInterval={5000}
          buttons={[
            { text: "Contactar Ahora", href: "contact" },
            { text: "Ver Servicios", href: "services" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Sobre Nexonix"
          tagIcon={Shield}
          tagAnimation="slide-up"
          title="Especialistas en montaje y mantenimiento con valores de transparencia y calidad técnica. Desde 2026, revolucionando el servicio informático en Valdemoro."
          buttons={[
            { text: "Descubre Más", href: "#" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwelve
          features={[
            {
              id: "custom-pc",              label: "Montaje",              title: "Ordenadores Personalizados",              items: [
                "Selección de componentes premium",                "Ensamblaje profesional",                "Testing exhaustivo",                "Garantía de calidad",                "Optimización de rendimiento"
              ],
              buttons: [
                { text: "Solicitar Presupuesto", href: "contact" }
              ]
            },
            {
              id: "preventive-maintenance",              label: "Mantenimiento",              title: "Preventivo y Limpieza Interna",              items: [
                "Limpieza de polvo interno",                "Revisión de componentes",                "Verificación térmica",                "Actualización de drivers",                "Prevención de fallos"
              ],
              buttons: [
                { text: "Contratar Servicio", href: "contact" }
              ]
            },
            {
              id: "optimization",              label: "Optimización",              title: "Sistemas y Eliminación de Malware",              items: [
                "Escaneo completo de seguridad",                "Eliminación de malware y virus",                "Limpieza de registros",                "Optimización de velocidad",                "Protección preventiva"
              ],
              buttons: [
                { text: "Diagnosticar Ahora", href: "contact" }
              ]
            },
            {
              id: "onsite-support",              label: "Soporte",              title: "Técnico a Domicilio para Empresas",              items: [
                "Asistencia en tu ubicación",                "Resolución rápida de incidencias",                "Asesoramiento técnico",                "Planes personalizados",                "Disponibilidad flexible"
              ],
              buttons: [
                { text: "Consultar Tarifas", href: "pricing" }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          title="Nuestros Servicios"
          description="Soluciones informáticas completas adaptadas a tus necesidades de rendimiento y fiabilidad"
          tag="Servicios Integrales"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          plans={[
            {
              id: "diagnostic",              badge: "Básico",              badgeIcon: Zap,
              price: "25€",              subtitle: "Diagnóstico inicial",              features: [
                "Diagnóstico completo del sistema",                "Reporte detallado de problemas",                "Presupuesto sin compromiso",                "Consultoría técnica inicial"
              ]
            },
            {
              id: "assembly",              badge: "Más Popular",              badgeIcon: Star,
              price: "80€",              subtitle: "Montaje de ordenador",              features: [
                "Montaje profesional de PC",                "Instalación de SO",                "Testing completo",                "Garantía de funcionamiento",                "Asesoramiento de componentes"
              ]
            },
            {
              id: "maintenance",              badge: "Mantenimiento",              badgeIcon: Shield,
              price: "40€",              subtitle: "Mantenimiento preventivo",              features: [
                "Limpieza interna completa",                "Revisión de componentes",                "Optimización de sistemas",                "Actualización de software",                "Informe de estado"
              ]
            },
            {
              id: "support",              badge: "Premium",              badgeIcon: Sparkles,
              price: "60€",              subtitle: "Soporte técnico a domicilio",              features: [
                "Asistencia en tu ubicación",                "Resolución de incidencias",                "Planes personalizados",                "Disponibilidad flexible",                "Asesoramiento experto"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          title="Precios Transparentes"
          description="Tarifas claras y justas sin sorpresas. Calidad profesional a precios competitivos."
          tag="Tarifas 2026"
          tagIcon={DollarSign}
          tagAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          metrics={[
            {
              id: "clients",              value: "500+",              title: "Clientes Satisfechos",              items: [
                "PYMES confían en nosotros",                "Autónomos con soporte premium",                "Tasa de satisfacción 98%"
              ]
            },
            {
              id: "systems",              value: "1000+",              title: "Sistemas Optimizados",              items: [
                "Rendimiento mejorado garantizado",                "Cero tiempo de inactividad",                "Mantenimiento preventivo efectivo"
              ]
            },
            {
              id: "expertise",              value: "15+",              title: "Años de Experiencia",              items: [
                "Técnicos altamente cualificados",                "Certificaciones profesionales",                "Actualización continua"
              ]
            },
            {
              id: "uptime",              value: "99.9%",              title: "Disponibilidad Garantizada",              items: [
                "Soporte técnico 24/7",                "Respuesta rápida a incidencias",                "Planes de continuidad"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          title="Numeros que Hablan"
          description="Nuestra experiencia y compromiso con la excelencia técnica en números"
          tag="Logros"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Ponte en Contacto"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Solicita Presupuesto o Soporte Técnico"
          description="Contacta con nosotros para conocer cómo podemos ayudarte a optimizar tu infraestructura informática. Ubicados en el polígono industrial de Valdemoro."
          background={{ variant: "rotated-rays-animated-grid" }}
          inputPlaceholder="tu@email.com"
          buttonText="Enviar"
          termsText="Respetamos tu privacidad. Nos pondremos en contacto en el plazo de 24 horas."
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Servicios",              items: [
                { label: "Montaje Personalizado", href: "#services" },
                { label: "Mantenimiento Preventivo", href: "#services" },
                { label: "Optimización de Sistemas", href: "#services" },
                { label: "Soporte Técnico", href: "#services" }
              ]
            },
            {
              title: "Empresa",              items: [
                { label: "Sobre Nosotros", href: "#about" },
                { label: "Precios", href: "#pricing" },
                { label: "Contacto", href: "#contact" },
                { label: "Ubicación", href: "#contact" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Política de Privacidad", href: "#" },
                { label: "Términos de Servicio", href: "#" },
                { label: "Aviso Legal", href: "#" },
                { label: "Cookies", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025-2026 Nexonix | Servicios Informáticos Premium | Valdemoro, Madrid"
        />
      </div>
    </ThemeProvider>
  );
}

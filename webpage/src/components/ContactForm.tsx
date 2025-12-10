import { useState } from 'react';

interface ContactFormProps {
  lang?: 'de' | 'en';
}

export default function ContactForm({ lang = 'de' }: ContactFormProps) {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  });

  const content = {
    de: {
      title: 'Starten Sie Ihre Pilotphase',
      subtitle: 'Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.',
      nameLabel: 'Name',
      namePlaceholder: 'Max Mustermann',
      companyLabel: 'Unternehmen',
      companyPlaceholder: 'Mustermann Bau GmbH',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'max@mustermann-bau.de',
      phoneLabel: 'Telefon (optional)',
      phonePlaceholder: '+49 123 456789',
      submitButton: 'Anfrage senden',
      submittingButton: 'Wird gesendet...',
      successMessage: 'Vielen Dank! Wir melden uns in Kürze bei Ihnen.',
      errorMessage: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
      required: 'Pflichtfeld'
    },
    en: {
      title: 'Start Your Pilot Phase',
      subtitle: 'Fill out the form and we will get back to you within 24 hours.',
      nameLabel: 'Name',
      namePlaceholder: 'John Doe',
      companyLabel: 'Company',
      companyPlaceholder: 'Doe Construction Ltd',
      emailLabel: 'Email',
      emailPlaceholder: 'john@doe-construction.com',
      phoneLabel: 'Phone (optional)',
      phonePlaceholder: '+49 123 456789',
      submitButton: 'Send Request',
      submittingButton: 'Sending...',
      successMessage: 'Thank you! We will get back to you shortly.',
      errorMessage: 'An error occurred. Please try again or contact us directly.',
      required: 'Required'
    }
  };

  const t = content[lang];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      // Replace with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', company: '', email: '', phone: '' });
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        {formState === 'success' ? (
          <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-green-900">{t.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.nameLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.namePlaceholder}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.companyLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder={t.companyPlaceholder}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.emailLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.emailPlaceholder}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.phonePlaceholder}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition"
              />
            </div>

            {/* Error Message */}
            {formState === 'error' && (
              <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-red-800">
                {t.errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg disabled:cursor-not-allowed"
            >
              {formState === 'submitting' ? t.submittingButton : t.submitButton}
            </button>

            {/* Privacy Notice */}
            <p className="text-sm text-gray-500 text-center">
              {lang === 'de' ? (
                <>
                  Durch Absenden des Formulars stimmen Sie unserer{' '}
                  <a href="/de/datenschutz" className="text-primary-600 hover:underline">
                    Datenschutzerklärung
                  </a>{' '}
                  zu.
                </>
              ) : (
                <>
                  By submitting this form, you agree to our{' '}
                  <a href="/en/privacy" className="text-primary-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </>
              )}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

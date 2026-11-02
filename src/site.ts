export const links = {
  email: 'vignesh181201@gmail.com',
  github: 'https://github.com/Vigneshwararaj-S',
  linkedin: 'https://www.linkedin.com/in/vigneshwararaj-s-067446191',
  cv: '/Vigneshwararaj-Sathianarayanan-CV.pdf',
};

// Smaller or older projects, listed by name on the home page.
export const otherProjects = [
  { name: 'Human action detection', year: '2024', text: 'Detecting human actions, from a neural networks and deep learning course.', href: 'https://github.com/Vigneshwararaj-S/Advanced-Object-Detection' },
  { name: 'Societi', year: '2022', text: "A social media website from my bachelor's degree.", href: 'https://github.com/Vigneshwararaj/SocietiSocialMedia' },
  { name: 'Pokédex', year: '2022', text: "A machine learning Pokédex project from my bachelor's degree.", href: 'https://github.com/Vigneshwararaj/ML-Project' },
];

export function formatDate(d: Date) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

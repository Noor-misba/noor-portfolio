const handleDownloadResume = () => {
  // Confetti effect
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#3b82f6', '#8b5cf6', '#ec4899']
  });

  // Download resume
  const link = document.createElement('a');
  link.href = `${import.meta.env.BASE_URL}Resume.pdf`;
  link.download = 'Noor_Misba_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
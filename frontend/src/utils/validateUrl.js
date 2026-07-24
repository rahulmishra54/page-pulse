export function validateUrl(value) {
  const trimmed = value.trim();

  if (!trimmed) {
    return {
      isValid: false,
      message: 'Please enter a website URL before analyzing.',
    };
  }

  try {
    const url = new URL(trimmed);
    if (!['http:', 'https:'].includes(url.protocol)) {
      throw new Error('Invalid protocol');
    }

    return {
      isValid: true,
      message: '',
    };
  } catch {
    return {
      isValid: false,
      message: 'Please enter a valid URL starting with http:// or https://',
    };
  }
}

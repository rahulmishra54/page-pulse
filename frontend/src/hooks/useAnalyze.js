import { useState } from 'react';
import { analyzeWebsite } from '../services/api';
import { validateUrl } from '../utils/validateUrl';

export function useAnalyze() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const analyze = async (url) => {
    const validation = validateUrl(url);
    if (!validation.isValid) {
      setResult(null);
      setError(validation.message);
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await analyzeWebsite(url);
      setResult(response.data);
    } catch (err) {
      if (err.code === 'ECONNABORTED') {
        setError('The request timed out. Please try again.');
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Unable to analyze the website right now. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { analyze, loading, error, result };
}

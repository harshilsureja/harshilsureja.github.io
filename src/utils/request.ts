import axios from 'axios';

const request = async (config: any) => {
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    return {
      error,
    };
  }
};

export default request;

const validator = (formData: any, requiredFormData: any) => {
  let firstErrorId;
  let result: { status: boolean; data: any; id?: string } = {
    status: true,
    data: {},
  };
  for (const key in formData) {
    if (requiredFormData.hasOwnProperty(key)) {
      if (!formData[key]) {
        if (!firstErrorId) {
          firstErrorId = key;
        }
        result = {
          status: false,
          data: { ...result.data, [key]: true },
          id: firstErrorId,
        };
      } else {
        result = {
          status: result.status,
          data: { ...result.data, [key]: false },
          id: firstErrorId,
        };
      }
    }
  }
  return result;
};

export default validator;

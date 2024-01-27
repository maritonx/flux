import Api from '@/services/Api';

export default {
  getVolumeDataOfComponent(zelidauthHeader, appname, componentname, multiplier, decimal, fields) {
    const axiosConfig = {
      headers: {
        zelidauth: zelidauthHeader,
      },
    };
    return Api().get(`/backup/getvolumedataofcomponent/${appname}/${componentname}/${multiplier}/${decimal}/${fields}`, axiosConfig);
  },
  getRemoteFileSize(zelidauthHeader, fileurl, multiplier, decimal) {
    const axiosConfig = {
      headers: {
        zelidauth: zelidauthHeader,
      },
    };
    return Api().get(`/backup/getremotefilesize/${fileurl}/${multiplier}/${decimal}`, axiosConfig);
  },
};

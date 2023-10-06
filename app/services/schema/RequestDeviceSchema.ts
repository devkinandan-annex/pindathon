import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const RequestDeviceSchema = Yup.object().shape({
  name: Yup.string().required('Device name cannot be kept empty'),
  info: Yup.string().required('Please enter device more information'),
  url: Yup.string().url('Link to website cannot be kept empty')
}).required();
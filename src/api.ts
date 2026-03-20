import axios from 'axios';

const API_BASE_URL = 'https://api.mail.tm';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Account {
  id: string;
  address: string;
  quota: number;
  used: number;
  isDisabled: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  accountId: string;
  msgid: string;
  from: {
    address: string;
    name: string;
  };
  to: [
    {
      address: string;
      name: string;
    }
  ];
  subject: string;
  intro: string;
  seen: boolean;
  isDeleted: boolean;
  hasAttachments: boolean;
  size: number;
  downloadUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface MessageDetail extends Message {
  text: string;
  html: [string];
  retention: boolean;
  retentionDate: string;
}

export interface Domain {
  id: string;
  domain: string;
  isActive: boolean;
  isPrivate: boolean;
  createdAt: string;
  updatedAt: string;
}

export const getDomains = async (): Promise<Domain[]> => {
  const response = await api.get('/domains');
  return response.data['hydra:member'];
};

export const createAccount = async (address: string, password: string): Promise<Account> => {
  const response = await api.post('/accounts', { address, password });
  return response.data;
};

export const getToken = async (address: string, password: string): Promise<string> => {
  const response = await api.post('/token', { address, password });
  return response.data.token;
};

export const getMessages = async (token: string, page = 1): Promise<Message[]> => {
  const response = await api.get(`/messages?page=${page}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data['hydra:member'];
};

export const getMessage = async (token: string, id: string): Promise<MessageDetail> => {
  const response = await api.get(`/messages/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteMessage = async (token: string, id: string): Promise<void> => {
  await api.delete(`/messages/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const markAsRead = async (token: string, id: string): Promise<void> => {
  await api.patch(`/messages/${id}`, { seen: true }, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

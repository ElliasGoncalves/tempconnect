import { useState, useEffect, useCallback } from 'react';
import { 
  getDomains, 
  createAccount, 
  getToken, 
  getMessages, 
  getMessage, 
  deleteMessage, 
  markAsRead,
  Account,
  Message,
  MessageDetail
} from '@/lib/api';
import { useLocalStorage } from 'usehooks-ts';

export function useTempMail() {
  const [account, setAccount] = useLocalStorage<Account | null>('temp_mail_account', null);
  const [token, setToken] = useLocalStorage<string | null>('temp_mail_token', null);
  const [password, setPassword] = useLocalStorage<string | null>('temp_mail_password', null);
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateEmail = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const domains = await getDomains();
      if (!domains || domains.length === 0) {
        throw new Error('No domains available');
      }
      
      const domain = domains[0].domain;
      const randomString = Math.random().toString(36).substring(2, 10);
      const newPassword = Math.random().toString(36).substring(2, 15);
      const address = `${randomString}@${domain}`;
      
      const newAccount = await createAccount(address, newPassword);
      const newToken = await getToken(address, newPassword);
      
      setAccount(newAccount);
      setPassword(newPassword);
      setToken(newToken);
      setMessages([]);
    } catch (err: any) {
      console.error('Error generating email:', err);
      setError(err.message || 'Failed to generate email');
    } finally {
      setLoading(false);
    }
  }, [setAccount, setPassword, setToken]);

  const fetchMessages = useCallback(async () => {
    if (!token) return;
    
    setRefreshing(true);
    try {
      const msgs = await getMessages(token);
      setMessages(msgs);
    } catch (err: any) {
      console.error('Error fetching messages:', err);
      // If token is invalid (401), maybe clear account?
      if (err.response && err.response.status === 401) {
        setError('Session expired. Please generate a new email.');
      }
    } finally {
      setRefreshing(false);
    }
  }, [token]);

  const getMessageDetail = useCallback(async (id: string) => {
    if (!token) return null;
    try {
      return await getMessage(token, id);
    } catch (err) {
      console.error('Error fetching message detail:', err);
      return null;
    }
  }, [token]);

  const deleteMsg = useCallback(async (id: string) => {
    if (!token) return;
    try {
      await deleteMessage(token, id);
      setMessages(prev => prev.filter(m => m.id !== id));
    } catch (err) {
      console.error('Error deleting message:', err);
    }
  }, [token]);

  // Auto-refresh messages every 10 seconds
  useEffect(() => {
    if (token) {
      fetchMessages();
      const interval = setInterval(fetchMessages, 10000);
      return () => clearInterval(interval);
    }
  }, [token, fetchMessages]);

  return {
    account,
    token,
    messages,
    loading,
    refreshing,
    error,
    generateEmail,
    fetchMessages,
    getMessageDetail,
    deleteMsg
  };
}

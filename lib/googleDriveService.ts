import { google } from 'googleapis';

const drive = google.drive('v3');

export const listFiles = async (auth: any) => {
  const res = await drive.files.list({
    auth,
    pageSize: 10,
    fields: 'nextPageToken, files(id, name, mimeType, webContentLink)',
  });
  return res.data.files;
};

export const getFile = async (fileId: string, auth: any) => {
  const res = await drive.files.get({
    fileId,
    alt: 'media',
    auth,
  });
  return res.data;
}; 
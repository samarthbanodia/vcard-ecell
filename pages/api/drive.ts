import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { listFiles } from '../../../../lib/googleDriveService'; // Adjusted path

const auth = new google.auth.GoogleAuth({
  keyFile: 'path/to/your/credentials.json', // Path to your credentials file
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const authClient = await auth.getClient();
    const files = await listFiles(authClient);
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch files' });
  }
}
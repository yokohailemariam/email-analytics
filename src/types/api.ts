export interface ApiError {
  message: string;
  status: number;
}

export interface GetResponseTimeSlotResponse {
  "6am - 9am": number;
  "9am - 12pm": number;
  "12pm - 3pm": number;
  "3pm - 6pm": number;
  "6pm - 9pm": number;
  "9pm - 12am": number;
  "12am - 6am": number;
}

export type TChartData = { name: string; value: number };

export type TSearchResponse = {
  id: number;
  user_id: number;
  sender: string;
  recipient: string;
  subject: string;
  email_body: string;
  persons: unknown[];
  organizations: unknown[];
  job_titles: unknown[];
  dates: unknown[];
  sent_at: string;
  responded: boolean;
  email_length: number;
  bullet_points: unknown[];
  keywords: string[];
};

export interface IEmailResponse {
  average_response_time: number;
  email_responses: Emailresponse[];
}

interface Emailresponse {
  sent_email: Sentemail;
  received_email: Receivedemail;
  response_type: string;
  response_date: string;
  response_time: number;
}

interface Receivedemail {
  subject: string;
  internalDate: string;
  in_reply_to: null;
  message_id: string;
}

interface Sentemail {
  subject: string;
  internalDate: string;
  message_id: string;
}

export interface IEmailStatistics {
  average_email_length: number;
  average_response_time: number;
  top_keywords: (number | string)[][];
  non_responded_percentage: number;
}

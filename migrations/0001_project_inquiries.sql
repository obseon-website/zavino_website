CREATE TABLE project_inquiries (
  id TEXT PRIMARY KEY,
  payload_hash TEXT NOT NULL,
  submitted_at TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  focus TEXT NOT NULL,
  brief TEXT NOT NULL,
  systems TEXT NOT NULL DEFAULT '',
  outcome TEXT NOT NULL DEFAULT '',
  timing TEXT NOT NULL DEFAULT '',
  source TEXT NOT NULL,
  notification_status TEXT NOT NULL DEFAULT 'pending' CHECK(notification_status IN ('pending','sending','accepted','failed')),
  notification_message_id TEXT,
  notification_error TEXT,
  notification_updated_at TEXT
);
CREATE INDEX project_inquiries_submitted_at ON project_inquiries(submitted_at);
CREATE INDEX project_inquiries_email_submitted_at ON project_inquiries(email, submitted_at);
CREATE INDEX project_inquiries_notification_status ON project_inquiries(notification_status, submitted_at);

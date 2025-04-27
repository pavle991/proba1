-- initial schema for ClipShares
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE users(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE,
  wallet TEXT,
  role TEXT DEFAULT 'viewer',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE channels(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_user_id UUID REFERENCES users(id) UNIQUE,
  token_address TEXT NOT NULL,
  name TEXT,
  cover_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE videos(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  channel_id UUID REFERENCES channels(id),
  url TEXT,
  ttl_at TIMESTAMPTZ,
  points INT DEFAULT 0
);

CREATE TABLE views_stream(
  ts TIMESTAMPTZ,
  channel_id UUID,
  views INT,
  ad_views INT
);

CREATE TABLE daily_finance(
  date DATE,
  channel_id UUID,
  revenue NUMERIC(12,4),
  eps NUMERIC(12,6),
  ref_price NUMERIC(12,4),
  PRIMARY KEY(date, channel_id)
);

CREATE TABLE vesting(
  channel_id UUID REFERENCES channels(id),
  beneficiary TEXT,
  amount_locked NUMERIC,
  unlock_ts TIMESTAMPTZ
);

CREATE TABLE tx_logs(
  hash TEXT PRIMARY KEY,
  user_id UUID,
  type TEXT,
  status TEXT,
  payload JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

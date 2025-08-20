-- 创建联系消息表
CREATE TABLE contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_read BOOLEAN DEFAULT FALSE
);

-- 创建附件表
CREATE TABLE contact_attachments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    message_id UUID REFERENCES contact_messages(id) ON DELETE CASCADE,
    file_name VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    file_size INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX idx_contact_attachments_message_id ON contact_attachments(message_id);

-- 启用行级安全性
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_attachments ENABLE ROW LEVEL SECURITY;

-- 设置权限
GRANT SELECT ON contact_messages TO anon;
GRANT ALL PRIVILEGES ON contact_messages TO authenticated;

GRANT SELECT ON contact_attachments TO anon;
GRANT ALL PRIVILEGES ON contact_attachments TO authenticated;

-- 创建RLS策略
CREATE POLICY "Allow anonymous users to insert contact messages" ON contact_messages
    FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view all contact messages" ON contact_messages
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow anonymous users to insert contact attachments" ON contact_attachments
    FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view all contact attachments" ON contact_attachments
    FOR SELECT TO authenticated USING (true);
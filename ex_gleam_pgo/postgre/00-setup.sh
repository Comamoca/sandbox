#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
create database u149;

\c u149;

create table idols
(
    name text,
    age integer,
    height integer
);

INSERT INTO idols (name, age, height) VALUES
('橘ありす', 12, 141),
('櫻井桃華', 12, 145),
('赤城みりあ', 11, 140),
('的場梨沙', 12, 143),
('佐々木千枝', 11, 139),
('龍崎薫', 9, 132),
('市原仁奈', 9, 128),
('古賀小春', 12, 140),
('佐城雪美', 10, 137),
('福山舞', 10, 132),
('遊佐こずえ', 11, 130),
('横山千佳', 9, 127)
;
EOSQL

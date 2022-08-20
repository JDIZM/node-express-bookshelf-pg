PGDMP         7                z            test    14.5 (Debian 14.5-1.pgdg110+1)    14.5 (Debian 14.5-1.pgdg110+1) "               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16412    test    DATABASE     X   CREATE DATABASE test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE test;
                postgres    false            �            1259    16428    article    TABLE     �   CREATE TABLE public.article (
    id integer NOT NULL,
    user_id integer,
    title text,
    body text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.article;
       public         heap    postgres    false            �            1259    16427    article_id_seq    SEQUENCE     �   CREATE SEQUENCE public.article_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.article_id_seq;
       public          postgres    false    214                       0    0    article_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.article_id_seq OWNED BY public.article.id;
          public          postgres    false    213            �            1259    16414    knex_migrations    TABLE     �   CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);
 #   DROP TABLE public.knex_migrations;
       public         heap    postgres    false            �            1259    16413    knex_migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.knex_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.knex_migrations_id_seq;
       public          postgres    false    210                       0    0    knex_migrations_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;
          public          postgres    false    209            �            1259    16421    knex_migrations_lock    TABLE     `   CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);
 (   DROP TABLE public.knex_migrations_lock;
       public         heap    postgres    false            �            1259    16420    knex_migrations_lock_index_seq    SEQUENCE     �   CREATE SEQUENCE public.knex_migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.knex_migrations_lock_index_seq;
       public          postgres    false    212                       0    0    knex_migrations_lock_index_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;
          public          postgres    false    211            �            1259    16461    user    TABLE     �   CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    16460    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    216                       0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    215            p           2604    16431 
   article id    DEFAULT     h   ALTER TABLE ONLY public.article ALTER COLUMN id SET DEFAULT nextval('public.article_id_seq'::regclass);
 9   ALTER TABLE public.article ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            n           2604    16417    knex_migrations id    DEFAULT     x   ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);
 A   ALTER TABLE public.knex_migrations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            o           2604    16424    knex_migrations_lock index    DEFAULT     �   ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);
 I   ALTER TABLE public.knex_migrations_lock ALTER COLUMN index DROP DEFAULT;
       public          postgres    false    211    212    212            q           2604    16464    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216                      0    16428    article 
   TABLE DATA           S   COPY public.article (id, user_id, title, body, created_at, updated_at) FROM stdin;
    public          postgres    false    214            
          0    16414    knex_migrations 
   TABLE DATA           J   COPY public.knex_migrations (id, name, batch, migration_time) FROM stdin;
    public          postgres    false    210                      0    16421    knex_migrations_lock 
   TABLE DATA           @   COPY public.knex_migrations_lock (index, is_locked) FROM stdin;
    public          postgres    false    212                      0    16461    user 
   TABLE DATA           B   COPY public."user" (id, email, first_name, last_name) FROM stdin;
    public          postgres    false    216                       0    0    article_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.article_id_seq', 1, false);
          public          postgres    false    213                       0    0    knex_migrations_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.knex_migrations_id_seq', 4, true);
          public          postgres    false    209                       0    0    knex_migrations_lock_index_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);
          public          postgres    false    211                       0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 1, true);
          public          postgres    false    215            w           2606    16435    article article_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.article
    ADD CONSTRAINT article_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.article DROP CONSTRAINT article_pkey;
       public            postgres    false    214            y           2606    16437    article article_user_id_unique 
   CONSTRAINT     \   ALTER TABLE ONLY public.article
    ADD CONSTRAINT article_user_id_unique UNIQUE (user_id);
 H   ALTER TABLE ONLY public.article DROP CONSTRAINT article_user_id_unique;
       public            postgres    false    214            u           2606    16426 .   knex_migrations_lock knex_migrations_lock_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);
 X   ALTER TABLE ONLY public.knex_migrations_lock DROP CONSTRAINT knex_migrations_lock_pkey;
       public            postgres    false    212            s           2606    16419 $   knex_migrations knex_migrations_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.knex_migrations DROP CONSTRAINT knex_migrations_pkey;
       public            postgres    false    210            {           2606    16470    user user_email_unique 
   CONSTRAINT     T   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_unique UNIQUE (email);
 B   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_email_unique;
       public            postgres    false    216            }           2606    16468    user user_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (email);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    216               P   x�3���N�-�IU�/.Q�,�I�L��%�T*$�畤�p�X�(ZX�Z�Xh�[�b���� A�c      
   i   x�]�M
� �u<E�!���S�,1a-���?�P���3��5��٤ɥ��Y%�rT����;c�����&n��s�����O�6�+�I����xj��\#V            x�3�4������ V         +   x�3�L+JMqH���+).��K-�K���t
r���b���� _��     
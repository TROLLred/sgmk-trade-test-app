PGDMP     (                    z            chechens    14.3    14.3     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16404    chechens    DATABASE     e   CREATE DATABASE chechens WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE chechens;
                postgres    false            ?            1259    16406    peoples    TABLE     T  CREATE TABLE public.peoples (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    surname character varying(255) NOT NULL,
    phonenumber character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.peoples;
       public         heap    postgres    false            ?            1259    16405    peoples_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.peoples_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.peoples_id_seq;
       public          postgres    false    210            ?           0    0    peoples_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.peoples_id_seq OWNED BY public.peoples.id;
          public          postgres    false    209            \           2604    16409 
   peoples id    DEFAULT     h   ALTER TABLE ONLY public.peoples ALTER COLUMN id SET DEFAULT nextval('public.peoples_id_seq'::regclass);
 9   ALTER TABLE public.peoples ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            ?          0    16406    peoples 
   TABLE DATA           d   COPY public.peoples (id, name, surname, phonenumber, address, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    210   ?       ?           0    0    peoples_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.peoples_id_seq', 20, true);
          public          postgres    false    209            ^           2606    16415    peoples peoples_phonenumber_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.peoples
    ADD CONSTRAINT peoples_phonenumber_key UNIQUE (phonenumber);
 I   ALTER TABLE ONLY public.peoples DROP CONSTRAINT peoples_phonenumber_key;
       public            postgres    false    210            `           2606    16413    peoples peoples_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.peoples
    ADD CONSTRAINT peoples_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.peoples DROP CONSTRAINT peoples_pkey;
       public            postgres    false    210            ?   ?  x?}U?r?0|??B??Y?%???P??@)O??𘒄???/Hԕ;??tƚ$????9?2e??_??[??[g??-?י???U\(͕ŧ??d??-s?? ]c?ڍ_q7?yYf?????dyA???,s)?YQ? 1???~?߀?1s????sWZqc'ɥ8?M?eMT?͕?.?!?L?~?K7???}sob?CW?rܴ???Җ)???7???Tu1jTڀ?}?]ş 'Q?p[$?~???a????J?][?2'U?HH F???S	?~???=?A(??????*??h??#??g?@???x?0?=^7?F?RI%?&?V??*??????
?#!?	x|s0?????^?)
???<????	??_?"l?B??u??Q??{p?š???H(?`?6̡5vMÎ=?9")?B?V?? ?????|;??Pܿ?n?J!?????6?]?7??????????k??2?	??5&?????6?U?E?????L?5Z???s?O????b???gn????<?a???BM0"J???؇8?? ?̨jM??bTepV?"xkk?ar?ZQ?`tC???m#i?z??B?p}??????Y????6?z?B?[#???0?!2??Qt?t.Oh!F6?F??8?NdTU??42?q?)|??W??Û?2gU+ʉz.?b?yܠ??'&??8oocv+I?C?¿?O;?ԥ????I ?:g?=y??k     
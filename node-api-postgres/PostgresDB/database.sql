--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: apm_data; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.apm_data (
    program_name character varying(20),
    program_increment character(4),
    team_name character varying(20),
    sprint character(4),
    points_planned integer,
    velocity_predicted integer,
    spr_planned integer,
    points_completed integer,
    spr_actual integer,
    velocity integer,
    proj_velocity integer,
    ideal_remaining_sp integer,
    projection_by_average integer,
    status character varying(10)
);


ALTER TABLE public.apm_data OWNER TO me;

--
-- Name: teams; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.teams (
    id integer NOT NULL,
    name character varying(10)
);


ALTER TABLE public.teams OWNER TO me;

--
-- Name: teams_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.teams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_id_seq OWNER TO me;

--
-- Name: teams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.teams_id_seq OWNED BY public.teams.id;


--
-- Name: teams id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.teams ALTER COLUMN id SET DEFAULT nextval('public.teams_id_seq'::regclass);


--
-- Data for Name: apm_data; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.apm_data (program_name, program_increment, team_name, sprint, points_planned, velocity_predicted, spr_planned, points_completed, spr_actual, velocity, proj_velocity, ideal_remaining_sp, projection_by_average, status) FROM stdin;
Big Business	PI1 	Team1	S1  	65	65	0	85	-20	85	\N	\N	\N	ON-Track
Big Business	PI1 	Team1	S2  	84	75	10	67	17	76	\N	\N	\N	ON-Track
Big Business	PI1 	Team1	S3  	72	74	-2	55	17	69	\N	\N	\N	ON-Track
Big Business	PI1 	Team1	S4  	61	71	-10	70	-9	70	\N	\N	\N	ON-Track
Big Business	PI1 	Team1	S5  	65	69	-4	67	-2	69	\N	\N	\N	AT-Risk
Big Business	PI1 	Team2	S1  	50	50	0	25	25	25	\N	\N	\N	AT-Risk
Big Business	PI1 	Team2	S2  	50	50	0	30	20	28	\N	\N	\N	AT-Risk
Big Business	PI1 	Team2	S3  	50	50	0	32	18	29	\N	\N	\N	AT-Risk
Big Business	PI1 	Team2	S4  	50	50	0	36	14	31	\N	\N	\N	AT-Risk
Big Business	PI1 	Team2	S5  	50	50	0	38	12	33	\N	\N	\N	AT-Risk
Big Business	PI1 	Team3	S1  	42	42	0	75	-33	75	\N	\N	\N	AT-Risk
Big Business	PI1 	Team3	S2  	65	54	12	71	-6	73	\N	\N	\N	AT-Risk
Big Business	PI1 	Team3	S3  	72	60	12	69	3	72	\N	\N	\N	AT-Risk
Big Business	PI1 	Team3	S4  	70	62	8	72	-2	72	\N	\N	\N	AT-Risk
Big Business	PI1 	Team3	S5  	72	64	8	72	0	72	\N	\N	\N	AT-Risk
Big Business	PI2 	Team1	S6  	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team1	S7  	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team1	S8  	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team1	S9  	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team1	S10 	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team2	S6  	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team2	S7  	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team2	S8  	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team2	S9  	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team2	S10 	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team3	S6  	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team3	S7  	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team3	S8  	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team3	S9  	\N	\N	0	\N	0	\N	\N	\N	\N	\N
Big Business	PI2 	Team3	S10 	\N	\N	0	\N	0	\N	\N	\N	\N	\N
\.


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.teams (id, name) FROM stdin;
1	Team1
2	Team2
3	Team3
\.


--
-- Name: teams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.teams_id_seq', 3, true);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


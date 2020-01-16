"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          first_name: "Keefe",
          last_name: "Stanley",
          email: "mauris@pellentesquetellus.org",
          password: "parola123",
          createdAt: "Thu, 14 Nov 2019 01:23:05 -0800",
          updatedAt: "Mon, 30 Sep 2019 14:54:23 -0700"
        },
        {
          first_name: "Fletcher",
          last_name: "Rosario",
          email: "Suspendisse.commodo.tincidunt@sollicitudinamalesuada.co.uk",
          password: "parola123",
          createdAt: "Mon, 23 Dec 2019 17:45:51 -0800",
          updatedAt: "Wed, 05 Jun 2019 06:17:10 -0700"
        },
        {
          first_name: "Aristotle",
          last_name: "White",
          email: "adipiscing@sedorcilobortis.org",
          password: "parola123",
          createdAt: "Sun, 04 Oct 2020 21:41:05 -0700",
          updatedAt: "Mon, 14 Sep 2020 21:20:32 -0700"
        },
        {
          first_name: "Chaim",
          last_name: "Stout",
          email: "per.conubia@convallis.com",
          password: "parola123",
          createdAt: "Fri, 06 Dec 2019 19:50:12 -0800",
          updatedAt: "Sat, 11 May 2019 17:56:27 -0700"
        },
        {
          first_name: "Knox",
          last_name: "Finch",
          email: "vel@sitametdiam.net",
          password: "parola123",
          createdAt: "Thu, 25 Jul 2019 07:42:53 -0700",
          updatedAt: "Tue, 20 Aug 2019 12:46:59 -0700"
        },
        {
          first_name: "Lane",
          last_name: "Pearson",
          email: "est.vitae@montesnasceturridiculus.edu",
          password: "parola123",
          createdAt: "Mon, 20 May 2019 09:08:30 -0700",
          updatedAt: "Sat, 20 Jun 2020 09:13:07 -0700"
        },
        {
          first_name: "Aristotle",
          last_name: "Chan",
          email: "egestas@NullainterdumCurabitur.com",
          password: "parola123",
          createdAt: "Mon, 14 Jan 2019 08:29:02 -0800",
          updatedAt: "Mon, 19 Aug 2019 20:38:13 -0700"
        },
        {
          first_name: "Kuame",
          last_name: "Perkins",
          email: "vehicula.risus.Nulla@liberoIntegerin.net",
          password: "parola123",
          createdAt: "Thu, 14 May 2020 21:36:21 -0700",
          updatedAt: "Fri, 03 May 2019 16:05:42 -0700"
        },
        {
          first_name: "Mannix",
          last_name: "Kelley",
          email: "facilisis.eget.ipsum@Crasinterdum.co.uk",
          password: "parola123",
          createdAt: "Wed, 03 Jun 2020 10:55:39 -0700",
          updatedAt: "Mon, 08 Apr 2019 02:26:51 -0700"
        },
        {
          first_name: "Price",
          last_name: "Terry",
          email: "elit.dictum@venenatisamagna.co.uk",
          password: "parola123",
          createdAt: "Wed, 20 May 2020 13:22:01 -0700",
          updatedAt: "Wed, 27 Feb 2019 06:32:29 -0800"
        },
        {
          first_name: "Elmo",
          last_name: "Mcintyre",
          email: "Nulla.dignissim@tempordiamdictum.org",
          password: "parola123",
          createdAt: "Sun, 29 Nov 2020 19:00:21 -0800",
          updatedAt: "Fri, 22 Nov 2019 00:35:39 -0800"
        },
        {
          first_name: "Declan",
          last_name: "Estrada",
          email: "rutrum@eudolor.net",
          password: "parola123",
          createdAt: "Sun, 13 Jan 2019 09:33:43 -0800",
          updatedAt: "Thu, 01 Oct 2020 22:41:29 -0700"
        },
        {
          first_name: "Amos",
          last_name: "Duffy",
          email: "lectus@ultricesposuerecubilia.net",
          password: "parola123",
          createdAt: "Sun, 29 Nov 2020 09:31:48 -0800",
          updatedAt: "Tue, 23 Apr 2019 12:31:06 -0700"
        },
        {
          first_name: "Joshua",
          last_name: "Rush",
          email: "nec.enim.Nunc@mollisvitae.org",
          password: "parola123",
          createdAt: "Tue, 17 Sep 2019 02:45:54 -0700",
          updatedAt: "Thu, 13 Dec 2018 19:22:41 -0800"
        },
        {
          first_name: "Amery",
          last_name: "Stanley",
          email: "eget.varius.ultrices@Vivamusrhoncus.com",
          password: "parola123",
          createdAt: "Sat, 19 Jan 2019 23:45:49 -0800",
          updatedAt: "Sat, 22 Feb 2020 13:55:50 -0800"
        },
        {
          first_name: "Malik",
          last_name: "Blankenship",
          email: "lorem@egestasFusce.com",
          password: "parola123",
          createdAt: "Wed, 09 Oct 2019 17:37:39 -0700",
          updatedAt: "Sat, 29 Dec 2018 07:05:28 -0800"
        },
        {
          first_name: "Drew",
          last_name: "Vega",
          email: "volutpat@utodiovel.co.uk",
          password: "parola123",
          createdAt: "Thu, 01 Aug 2019 07:23:50 -0700",
          updatedAt: "Tue, 29 Sep 2020 15:57:39 -0700"
        },
        {
          first_name: "Davis",
          last_name: "Stephens",
          email: "cubilia.Curae.Phasellus@anteiaculisnec.co.uk",
          password: "parola123",
          createdAt: "Thu, 01 Aug 2019 04:50:05 -0700",
          updatedAt: "Tue, 04 Dec 2018 13:20:59 -0800"
        },
        {
          first_name: "Otto",
          last_name: "Allen",
          email: "eget.metus@sociisnatoque.com",
          password: "parola123",
          createdAt: "Fri, 22 Nov 2019 14:11:05 -0800",
          updatedAt: "Fri, 29 Nov 2019 10:16:25 -0800"
        },
        {
          first_name: "Hasad",
          last_name: "Parrish",
          email: "tellus@dictumPhasellus.ca",
          password: "parola123",
          createdAt: "Fri, 17 Jan 2020 00:54:31 -0800",
          updatedAt: "Sun, 25 Aug 2019 16:06:30 -0700"
        },
        {
          first_name: "Caleb",
          last_name: "Hurley",
          email: "lacus.Quisque@montesnascetur.org",
          password: "parola123",
          createdAt: "Sat, 06 Apr 2019 04:01:47 -0700",
          updatedAt: "Thu, 24 Jan 2019 11:18:23 -0800"
        },
        {
          first_name: "Brian",
          last_name: "Kent",
          email: "gravida.Aliquam@sagittisaugueeu.edu",
          password: "parola123",
          createdAt: "Sat, 14 Mar 2020 10:37:09 -0700",
          updatedAt: "Fri, 06 Nov 2020 00:42:22 -0800"
        },
        {
          first_name: "Rafael",
          last_name: "Colon",
          email: "magnis.dis@nullaIn.org",
          password: "parola123",
          createdAt: "Fri, 10 Apr 2020 05:52:37 -0700",
          updatedAt: "Mon, 31 Aug 2020 03:24:26 -0700"
        },
        {
          first_name: "Howard",
          last_name: "Powers",
          email: "lorem@sedestNunc.ca",
          password: "parola123",
          createdAt: "Fri, 05 Jul 2019 01:47:46 -0700",
          updatedAt: "Fri, 01 Feb 2019 13:22:09 -0800"
        },
        {
          first_name: "Slade",
          last_name: "Flynn",
          email: "Donec.vitae@tristiquepharetraQuisque.org",
          password: "parola123",
          createdAt: "Wed, 28 Aug 2019 04:39:11 -0700",
          updatedAt: "Wed, 29 Jan 2020 18:25:17 -0800"
        },
        {
          first_name: "Amos",
          last_name: "Strong",
          email: "erat.nonummy.ultricies@ullamcorper.co.uk",
          password: "parola123",
          createdAt: "Sun, 20 Oct 2019 23:46:07 -0700",
          updatedAt: "Tue, 12 Mar 2019 11:45:46 -0700"
        },
        {
          first_name: "Blaze",
          last_name: "Stafford",
          email: "molestie@ametdiameu.org",
          password: "parola123",
          createdAt: "Mon, 07 Sep 2020 08:36:27 -0700",
          updatedAt: "Sun, 26 Jan 2020 08:31:19 -0800"
        },
        {
          first_name: "Blaze",
          last_name: "Ortega",
          email: "pretium@mifringilla.co.uk",
          password: "parola123",
          createdAt: "Thu, 06 Jun 2019 02:14:03 -0700",
          updatedAt: "Wed, 29 May 2019 17:07:58 -0700"
        },
        {
          first_name: "Aristotle",
          last_name: "Mcintyre",
          email: "a.felis@estmaurisrhoncus.org",
          password: "parola123",
          createdAt: "Wed, 15 May 2019 11:36:41 -0700",
          updatedAt: "Mon, 10 Feb 2020 00:17:02 -0800"
        },
        {
          first_name: "Alexander",
          last_name: "Sargent",
          email: "Vivamus.non@laoreetlibero.com",
          password: "parola123",
          createdAt: "Wed, 05 Dec 2018 17:15:17 -0800",
          updatedAt: "Wed, 17 Apr 2019 19:26:06 -0700"
        },
        {
          first_name: "Beau",
          last_name: "Chaney",
          email: "nostra.per.inceptos@velquamdignissim.net",
          password: "parola123",
          createdAt: "Fri, 20 Mar 2020 02:21:59 -0700",
          updatedAt: "Fri, 22 Feb 2019 15:39:47 -0800"
        },
        {
          first_name: "Ignatius",
          last_name: "Brock",
          email: "Duis.gravida@Phasellusin.com",
          password: "parola123",
          createdAt: "Sat, 09 Mar 2019 22:22:45 -0800",
          updatedAt: "Sat, 08 Dec 2018 04:32:29 -0800"
        },
        {
          first_name: "Stewart",
          last_name: "Harrington",
          email: "mus.Aenean@Integersemelit.com",
          password: "parola123",
          createdAt: "Sun, 03 Feb 2019 19:20:40 -0800",
          updatedAt: "Thu, 09 Jul 2020 18:30:33 -0700"
        },
        {
          first_name: "Grant",
          last_name: "Jefferson",
          email: "tempor.diam@estMauriseu.co.uk",
          password: "parola123",
          createdAt: "Fri, 08 Mar 2019 21:15:05 -0800",
          updatedAt: "Thu, 12 Dec 2019 06:32:36 -0800"
        },
        {
          first_name: "Michael",
          last_name: "Moore",
          email: "auctor.non.feugiat@loremDonecelementum.net",
          password: "parola123",
          createdAt: "Sat, 19 Jan 2019 15:14:21 -0800",
          updatedAt: "Thu, 15 Aug 2019 22:24:46 -0700"
        },
        {
          first_name: "Dolan",
          last_name: "Hubbard",
          email: "ipsum.ac@est.edu",
          password: "parola123",
          createdAt: "Thu, 28 Nov 2019 20:15:21 -0800",
          updatedAt: "Sun, 20 Jan 2019 06:34:40 -0800"
        },
        {
          first_name: "Lawrence",
          last_name: "Green",
          email: "justo.nec@mauris.co.uk",
          password: "parola123",
          createdAt: "Tue, 20 Aug 2019 16:02:52 -0700",
          updatedAt: "Wed, 30 Jan 2019 21:31:27 -0800"
        },
        {
          first_name: "Marvin",
          last_name: "Moore",
          email: "suscipit.est@mitempor.edu",
          password: "parola123",
          createdAt: "Sun, 10 Mar 2019 01:42:53 -0800",
          updatedAt: "Tue, 03 Mar 2020 10:59:02 -0800"
        },
        {
          first_name: "Rafael",
          last_name: "Terrell",
          email: "velit.Aliquam@parturient.com",
          password: "parola123",
          createdAt: "Wed, 16 Jan 2019 14:01:45 -0800",
          updatedAt: "Tue, 04 Feb 2020 16:43:00 -0800"
        },
        {
          first_name: "Evan",
          last_name: "Warren",
          email: "eu.metus@euismod.com",
          password: "parola123",
          createdAt: "Thu, 27 Aug 2020 22:10:14 -0700",
          updatedAt: "Sat, 20 Jul 2019 15:59:58 -0700"
        },
        {
          first_name: "Oren",
          last_name: "Mendez",
          email: "sed.dolor.Fusce@quistristiqueac.edu",
          password: "parola123",
          createdAt: "Tue, 03 Dec 2019 01:17:16 -0800",
          updatedAt: "Fri, 28 Dec 2018 12:15:27 -0800"
        },
        {
          first_name: "Quentin",
          last_name: "Pace",
          email: "euismod.enim.Etiam@afacilisisnon.edu",
          password: "parola123",
          createdAt: "Sun, 24 Nov 2019 13:03:26 -0800",
          updatedAt: "Fri, 29 Nov 2019 00:35:59 -0800"
        },
        {
          first_name: "Nathaniel",
          last_name: "Moses",
          email: "a@erat.co.uk",
          password: "parola123",
          createdAt: "Sun, 04 Aug 2019 22:03:00 -0700",
          updatedAt: "Thu, 14 Nov 2019 15:47:15 -0800"
        },
        {
          first_name: "Bert",
          last_name: "Sanford",
          email: "Sed.id@facilisismagnatellus.net",
          password: "parola123",
          createdAt: "Fri, 26 Jul 2019 16:26:23 -0700",
          updatedAt: "Thu, 08 Oct 2020 06:49:41 -0700"
        },
        {
          first_name: "Caleb",
          last_name: "Richardson",
          email: "urna.nec@turpis.co.uk",
          password: "parola123",
          createdAt: "Wed, 29 Jul 2020 05:32:06 -0700",
          updatedAt: "Mon, 29 Apr 2019 08:23:33 -0700"
        },
        {
          first_name: "Hakeem",
          last_name: "Nieves",
          email: "risus.Quisque@Inat.com",
          password: "parola123",
          createdAt: "Mon, 04 May 2020 19:03:44 -0700",
          updatedAt: "Sun, 05 May 2019 01:33:54 -0700"
        },
        {
          first_name: "Noah",
          last_name: "Lester",
          email: "rutrum@Integer.org",
          password: "parola123",
          createdAt: "Thu, 19 Mar 2020 10:06:49 -0700",
          updatedAt: "Wed, 13 May 2020 00:42:44 -0700"
        },
        {
          first_name: "Mufutau",
          last_name: "Whitehead",
          email: "a.ultricies@ornarelectusjusto.org",
          password: "parola123",
          createdAt: "Sat, 08 Dec 2018 17:11:42 -0800",
          updatedAt: "Sat, 20 Jun 2020 06:23:32 -0700"
        },
        {
          first_name: "Andrew",
          last_name: "Spears",
          email: "enim@dolor.edu",
          password: "parola123",
          createdAt: "Sat, 07 Sep 2019 02:19:02 -0700",
          updatedAt: "Mon, 29 Jun 2020 06:32:01 -0700"
        },
        {
          first_name: "Troy",
          last_name: "Dotson",
          email: "mattis.Integer@Aliquamauctor.net",
          password: "parola123",
          createdAt: "Fri, 15 Nov 2019 21:16:15 -0800",
          updatedAt: "Tue, 18 Aug 2020 03:35:40 -0700"
        },
        {
          first_name: "Brett",
          last_name: "Sims",
          email: "eu.odio@gravidanon.net",
          password: "parola123",
          createdAt: "Fri, 17 Apr 2020 06:31:02 -0700",
          updatedAt: "Sun, 27 Jan 2019 19:53:39 -0800"
        },
        {
          first_name: "Xanthus",
          last_name: "Carlson",
          email: "eros.nec@lectusa.com",
          password: "parola123",
          createdAt: "Thu, 12 Dec 2019 12:52:07 -0800",
          updatedAt: "Tue, 20 Aug 2019 16:06:42 -0700"
        },
        {
          first_name: "Orlando",
          last_name: "Booth",
          email: "mattis@enimSuspendissealiquet.ca",
          password: "parola123",
          createdAt: "Fri, 04 Dec 2020 05:31:03 -0800",
          updatedAt: "Thu, 20 Dec 2018 10:54:00 -0800"
        },
        {
          first_name: "Armando",
          last_name: "Stafford",
          email: "mi.ac.mattis@ligulaNullamfeugiat.com",
          password: "parola123",
          createdAt: "Sun, 17 May 2020 12:44:52 -0700",
          updatedAt: "Sun, 08 Sep 2019 08:25:33 -0700"
        },
        {
          first_name: "Joseph",
          last_name: "Guy",
          email: "vitae@nunc.net",
          password: "parola123",
          createdAt: "Tue, 01 Oct 2019 03:46:27 -0700",
          updatedAt: "Thu, 12 Dec 2019 18:02:52 -0800"
        },
        {
          first_name: "Quinlan",
          last_name: "Trujillo",
          email: "lacinia.Sed@lorem.net",
          password: "parola123",
          createdAt: "Sat, 20 Apr 2019 22:12:41 -0700",
          updatedAt: "Sat, 18 May 2019 07:44:15 -0700"
        },
        {
          first_name: "Lucian",
          last_name: "Jensen",
          email: "mi.ac@auctorvitae.co.uk",
          password: "parola123",
          createdAt: "Tue, 06 Oct 2020 05:01:59 -0700",
          updatedAt: "Thu, 29 Aug 2019 01:28:52 -0700"
        },
        {
          first_name: "Mufutau",
          last_name: "Woods",
          email: "a.odio.semper@gravidasitamet.co.uk",
          password: "parola123",
          createdAt: "Tue, 22 Jan 2019 00:06:21 -0800",
          updatedAt: "Thu, 28 May 2020 07:38:58 -0700"
        },
        {
          first_name: "Elijah",
          last_name: "Mcdaniel",
          email: "bibendum.fermentum@sem.co.uk",
          password: "parola123",
          createdAt: "Sun, 07 Jul 2019 03:17:11 -0700",
          updatedAt: "Fri, 21 Jun 2019 08:57:15 -0700"
        },
        {
          first_name: "Ethan",
          last_name: "Ramos",
          email: "at@odio.org",
          password: "parola123",
          createdAt: "Thu, 26 Nov 2020 14:09:55 -0800",
          updatedAt: "Sun, 23 Jun 2019 23:50:14 -0700"
        },
        {
          first_name: "Joel",
          last_name: "Burt",
          email: "egestas.urna@etmalesuada.ca",
          password: "parola123",
          createdAt: "Sat, 09 Nov 2019 00:13:33 -0800",
          updatedAt: "Fri, 03 Apr 2020 04:46:53 -0700"
        },
        {
          first_name: "Marshall",
          last_name: "Blake",
          email: "tortor.dictum.eu@Proinvelnisl.net",
          password: "parola123",
          createdAt: "Thu, 13 Feb 2020 07:23:34 -0800",
          updatedAt: "Tue, 10 Dec 2019 12:33:32 -0800"
        },
        {
          first_name: "Keegan",
          last_name: "Velasquez",
          email: "nulla@nislarcu.net",
          password: "parola123",
          createdAt: "Mon, 29 Jul 2019 06:20:33 -0700",
          updatedAt: "Fri, 10 Jul 2020 10:34:43 -0700"
        },
        {
          first_name: "Stephen",
          last_name: "Vaughan",
          email: "nibh.Quisque.nonummy@tincidunt.org",
          password: "parola123",
          createdAt: "Sun, 30 Jun 2019 03:33:01 -0700",
          updatedAt: "Thu, 05 Sep 2019 06:50:23 -0700"
        },
        {
          first_name: "Reuben",
          last_name: "Lewis",
          email: "nisi@tellusnonmagna.co.uk",
          password: "parola123",
          createdAt: "Mon, 04 Mar 2019 01:53:07 -0800",
          updatedAt: "Tue, 21 Jan 2020 11:13:50 -0800"
        },
        {
          first_name: "Todd",
          last_name: "Olson",
          email: "Donec@fringilla.co.uk",
          password: "parola123",
          createdAt: "Sat, 03 Aug 2019 09:06:55 -0700",
          updatedAt: "Fri, 30 Oct 2020 10:30:02 -0700"
        },
        {
          first_name: "Eaton",
          last_name: "Sandoval",
          email: "tempor.est@eunibhvulputate.com",
          password: "parola123",
          createdAt: "Mon, 18 May 2020 15:10:29 -0700",
          updatedAt: "Sun, 12 May 2019 04:47:36 -0700"
        },
        {
          first_name: "Steel",
          last_name: "Sanchez",
          email: "Duis@Uttinciduntorci.com",
          password: "parola123",
          createdAt: "Mon, 18 May 2020 10:57:32 -0700",
          updatedAt: "Sat, 27 Apr 2019 19:21:46 -0700"
        },
        {
          first_name: "Griffith",
          last_name: "Rose",
          email: "ligula@sapien.ca",
          password: "parola123",
          createdAt: "Wed, 20 Nov 2019 17:57:58 -0800",
          updatedAt: "Tue, 11 Aug 2020 01:06:50 -0700"
        },
        {
          first_name: "Kamal",
          last_name: "Bowman",
          email: "nisi@mi.net",
          password: "parola123",
          createdAt: "Mon, 27 Jan 2020 06:46:17 -0800",
          updatedAt: "Wed, 15 Jul 2020 07:00:13 -0700"
        },
        {
          first_name: "Christian",
          last_name: "Crawford",
          email: "montes.nascetur.ridiculus@odioAliquam.net",
          password: "parola123",
          createdAt: "Sun, 02 Jun 2019 13:01:47 -0700",
          updatedAt: "Sat, 17 Aug 2019 09:28:26 -0700"
        },
        {
          first_name: "Daquan",
          last_name: "Velazquez",
          email: "tristique.aliquet.Phasellus@eros.org",
          password: "parola123",
          createdAt: "Tue, 25 Feb 2020 20:45:45 -0800",
          updatedAt: "Fri, 21 Jun 2019 19:36:44 -0700"
        },
        {
          first_name: "Raphael",
          last_name: "Curtis",
          email: "Aliquam@luctuset.ca",
          password: "parola123",
          createdAt: "Fri, 20 Dec 2019 16:34:09 -0800",
          updatedAt: "Mon, 27 Apr 2020 06:05:55 -0700"
        },
        {
          first_name: "Acton",
          last_name: "Duke",
          email: "Cras.lorem.lorem@nislsem.ca",
          password: "parola123",
          createdAt: "Sun, 09 Dec 2018 13:52:37 -0800",
          updatedAt: "Tue, 05 May 2020 06:36:40 -0700"
        },
        {
          first_name: "Harper",
          last_name: "Monroe",
          email: "Nulla.semper.tellus@faucibusut.com",
          password: "parola123",
          createdAt: "Mon, 02 Mar 2020 14:36:19 -0800",
          updatedAt: "Mon, 30 Mar 2020 14:49:13 -0700"
        },
        {
          first_name: "Benjamin",
          last_name: "Kaufman",
          email: "et.magnis@ipsum.co.uk",
          password: "parola123",
          createdAt: "Fri, 31 Jan 2020 05:54:36 -0800",
          updatedAt: "Thu, 03 Sep 2020 00:37:52 -0700"
        },
        {
          first_name: "Branden",
          last_name: "Sparks",
          email: "elit.pellentesque@malesuadaInteger.net",
          password: "parola123",
          createdAt: "Thu, 19 Dec 2019 09:27:17 -0800",
          updatedAt: "Fri, 16 Aug 2019 08:13:12 -0700"
        },
        {
          first_name: "Hasad",
          last_name: "Love",
          email: "erat.eget.tincidunt@idmollisnec.co.uk",
          password: "parola123",
          createdAt: "Mon, 18 Feb 2019 00:08:35 -0800",
          updatedAt: "Wed, 26 Aug 2020 22:04:30 -0700"
        },
        {
          first_name: "Ciaran",
          last_name: "Cruz",
          email: "Phasellus@risus.org",
          password: "parola123",
          createdAt: "Thu, 10 Oct 2019 15:11:24 -0700",
          updatedAt: "Wed, 29 May 2019 17:31:28 -0700"
        },
        {
          first_name: "Lane",
          last_name: "Scott",
          email: "Praesent.luctus@risus.edu",
          password: "parola123",
          createdAt: "Tue, 09 Jun 2020 21:07:14 -0700",
          updatedAt: "Mon, 23 Dec 2019 19:46:47 -0800"
        },
        {
          first_name: "Tyler",
          last_name: "Black",
          email: "semper@odiosagittis.co.uk",
          password: "parola123",
          createdAt: "Fri, 14 Aug 2020 04:39:40 -0700",
          updatedAt: "Wed, 21 Aug 2019 20:56:07 -0700"
        },
        {
          first_name: "Declan",
          last_name: "Craig",
          email: "enim.nisl.elementum@nequenonquam.co.uk",
          password: "parola123",
          createdAt: "Thu, 14 May 2020 13:48:21 -0700",
          updatedAt: "Thu, 22 Aug 2019 15:38:59 -0700"
        },
        {
          first_name: "Lucas",
          last_name: "Hendricks",
          email: "est.arcu.ac@sollicitudincommodoipsum.net",
          password: "parola123",
          createdAt: "Wed, 18 Mar 2020 01:47:14 -0700",
          updatedAt: "Wed, 22 May 2019 05:11:37 -0700"
        },
        {
          first_name: "Ezekiel",
          last_name: "Cherry",
          email: "aptent@ipsum.co.uk",
          password: "parola123",
          createdAt: "Sat, 20 Apr 2019 10:58:47 -0700",
          updatedAt: "Sat, 19 Sep 2020 16:30:51 -0700"
        },
        {
          first_name: "Erich",
          last_name: "Savage",
          email: "sem.molestie.sodales@Duismienim.co.uk",
          password: "parola123",
          createdAt: "Sat, 18 Apr 2020 11:28:49 -0700",
          updatedAt: "Mon, 14 Sep 2020 13:42:41 -0700"
        },
        {
          first_name: "Aidan",
          last_name: "Boyd",
          email: "mollis.vitae.posuere@lectusquis.co.uk",
          password: "parola123",
          createdAt: "Sat, 16 Nov 2019 17:49:47 -0800",
          updatedAt: "Sun, 05 May 2019 10:15:43 -0700"
        },
        {
          first_name: "Dane",
          last_name: "Vance",
          email: "sodales.purus.in@magna.ca",
          password: "parola123",
          createdAt: "Wed, 08 May 2019 14:58:22 -0700",
          updatedAt: "Thu, 09 Apr 2020 10:43:32 -0700"
        },
        {
          first_name: "Lance",
          last_name: "Huffman",
          email: "cursus.purus@quamPellentesque.org",
          password: "parola123",
          createdAt: "Thu, 05 Sep 2019 00:32:48 -0700",
          updatedAt: "Sat, 04 Jul 2020 09:16:50 -0700"
        },
        {
          first_name: "Cole",
          last_name: "Boone",
          email: "auctor@malesuadaIntegerid.org",
          password: "parola123",
          createdAt: "Thu, 28 Feb 2019 23:26:31 -0800",
          updatedAt: "Mon, 24 Jun 2019 05:53:07 -0700"
        },
        {
          first_name: "Giacomo",
          last_name: "Ware",
          email: "blandit.mattis@tristiquealiquet.ca",
          password: "parola123",
          createdAt: "Sun, 04 Aug 2019 00:21:04 -0700",
          updatedAt: "Sun, 29 Sep 2019 07:21:00 -0700"
        },
        {
          first_name: "Rahim",
          last_name: "Ellis",
          email: "vitae.nibh.Donec@rutrum.net",
          password: "parola123",
          createdAt: "Sat, 24 Oct 2020 16:47:52 -0700",
          updatedAt: "Wed, 28 Oct 2020 08:40:17 -0700"
        },
        {
          first_name: "Addison",
          last_name: "Austin",
          email: "bibendum@Etiam.com",
          password: "parola123",
          createdAt: "Tue, 21 Apr 2020 20:42:00 -0700",
          updatedAt: "Thu, 02 Jan 2020 14:33:08 -0800"
        },
        {
          first_name: "Zachery",
          last_name: "England",
          email: "sed@natoquepenatibuset.co.uk",
          password: "parola123",
          createdAt: "Wed, 29 Jul 2020 06:14:00 -0700",
          updatedAt: "Sun, 05 Jan 2020 08:19:57 -0800"
        },
        {
          first_name: "Murphy",
          last_name: "Garrison",
          email: "quis.accumsan@ametconsectetuer.net",
          password: "parola123",
          createdAt: "Mon, 07 Jan 2019 15:10:27 -0800",
          updatedAt: "Sat, 01 Aug 2020 22:16:04 -0700"
        },
        {
          first_name: "Aidan",
          last_name: "Flynn",
          email: "risus@utodio.co.uk",
          password: "parola123",
          createdAt: "Sun, 05 Jan 2020 08:38:57 -0800",
          updatedAt: "Fri, 02 Aug 2019 20:28:55 -0700"
        },
        {
          first_name: "Kennan",
          last_name: "Galloway",
          email: "amet.diam.eu@nonummyultricies.co.uk",
          password: "parola123",
          createdAt: "Sat, 04 Apr 2020 23:21:31 -0700",
          updatedAt: "Sat, 18 Apr 2020 09:43:49 -0700"
        },
        {
          first_name: "Mohammad",
          last_name: "Mcgowan",
          email: "urna.suscipit@habitantmorbi.org",
          password: "parola123",
          createdAt: "Mon, 21 Oct 2019 16:53:01 -0700",
          updatedAt: "Mon, 07 Oct 2019 03:18:44 -0700"
        },
        {
          first_name: "Ashton",
          last_name: "Mcknight",
          email: "lectus.pede@eros.org",
          password: "parola123",
          createdAt: "Sun, 29 Sep 2019 17:40:32 -0700",
          updatedAt: "Fri, 28 Aug 2020 00:05:58 -0700"
        },
        {
          first_name: "Bevis",
          last_name: "Jones",
          email: "aliquam.eu@rutrumFuscedolor.ca",
          password: "parola123",
          createdAt: "Tue, 24 Mar 2020 13:23:42 -0700",
          updatedAt: "Tue, 03 Nov 2020 12:06:56 -0800"
        },
        {
          first_name: "Brock",
          last_name: "Dixon",
          email: "aliquet@nonante.com",
          password: "parola123",
          createdAt: "Sat, 02 Mar 2019 15:36:51 -0800",
          updatedAt: "Sun, 15 Sep 2019 15:54:00 -0700"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};

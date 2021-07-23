import { useState, useEffect } from 'react';
import Box from '../src/components/Box';
import Main from '../src/components/Main';

import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/components/AluraCommons';
import ProfileRelationsBoxWrapper from '../src/components/ProfileRelations';

import Sidebar from '../src/components/Sidebar';
import { WrapperAffinities, WrapperCommunities } from '../src/components/WrapperRelations';

const URL = 'https://api.github.com/users';

export default function Home() {
	const [affinities, setAffinities] = useState(false);
	const [communities, setCommunities] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const githubUser = 'RenanPaixao';
	let followersQtt;
	const URL_PAG = `${URL}/${githubUser}/followers?per_page=6&page=${currentPage}`;

	useEffect(() => {
		const API_TOKEN = 'b2496fc5f221e2a2d5c2a7cd395a03';

		//get followers from api
		fetch(URL_PAG)
			.then((res) => {
				return res.json();
			})
			.then(async (res) => {
				//get qtt of followers from api
				const followersQtt = await fetch(`${URL}/${githubUser}`)
					.then((res) => {
						return res.json();
					})
					.then((res) => {
						return res.followers;
					});

				//join responses and change affinities
				const newAffinities = [{ qtt: followersQtt }, ...res];
				setAffinities(newAffinities);
			})
			.catch((e) => console.error(e));

		//get communities from DATO
		fetch('https://graphql.datocms.com/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${API_TOKEN}`,
			},
			body: JSON.stringify({
				query: `{ allCommunities {
					id
					title
					image
				}}`,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setCommunities(res.data.allCommunities);
			})
			.catch((e) => console.error(e));
	}, []);

	return (
		<>
			<AlurakutMenu githubUser={githubUser} />
			<Main>
				<Sidebar user={githubUser}></Sidebar>
				<div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
					<Box>
						<h1 className="title">Bem vindo(a)</h1>
						<OrkutNostalgicIconSet />
					</Box>
					<Box>
						<h2 className="subtitle">O que deseja fazer?</h2>
						<hr />
						<form
							onSubmit={(e) => {
								e.preventDefault();
								const data = new FormData(e.target);

								if (data.get('title').length === 0 || data.get('image').length === 0) {
									alert('Preencha todos os campos!');
								} else {
									setCommunities([
										...communities,
										{ id: new Date().toISOString(), title: data.get('title'), image: data.get('image') },
									]);
								}
							}}
						>
							<input
								type="text"
								name="title"
								placeholder="Qual será o nome da sua comunidade?"
								aria-label="Qual será o nome da sua comunidade?"
							></input>
							<input
								name="image"
								aria-label="Qual URL usaremos de capa?"
								placeholder="Qual URL usaremos de capa?"
								type="text"
							></input>
							<button>Criar comunidade</button>
						</form>
					</Box>
				</div>
				<div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
					<ProfileRelationsBoxWrapper>
						<WrapperCommunities req={communities} title="Comunidades" />
						{affinities ? (
							<WrapperAffinities req={affinities} title="Afinidades" qtt={followersQtt} />
						) : (
							'CARREGANDO...'
						)}
						<hr />
						{affinities && (
							<a href="/affinities" style={{ textDecoration: 'none', color: '#308BC5' }}>
								Ver mais...
							</a>
						)}
					</ProfileRelationsBoxWrapper>
				</div>
			</Main>
		</>
	);
}

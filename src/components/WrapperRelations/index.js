export function WrapperAffinities({ req, title }) {
	return (
		<>
			<h2 className="smallTitle">
				{title}
				{` (${req[0].qtt})`}
			</h2>
			<ul>
				{req.slice(1, 7).map((element) => {
					return (
						<li key={element.login}>
							<a href={`https://github.com/${element.login}`} target="_blank">
								<img src={`https://github.com/${element.login}.png`}></img>
								<span>{element.login}</span>
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export function WrapperCommunities({ req, title }) {
	return (
		<>
			<h2 className="smallTitle">
				{title}
				{' (' + req.length + ')'}
			</h2>
			<ul>
				{req.slice(0, 6).map((element) => {
					return (
						<li key={element.id}>
							<a href={`/users/${element.title}`}>
								<img src={element.image}></img>
								<span>{element.title}</span>
							</a>
						</li>
					);
				})}
			</ul>
			<hr />
		</>
	);
}

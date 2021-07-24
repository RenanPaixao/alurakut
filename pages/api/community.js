import { SiteClient } from 'datocms-client';

export default async function createRecord(req, res) {
	console.log(req);
	if (req.method === 'POST') {
		const client = new SiteClient('TOKEN');

		const record = await client.items.create({
			itemType: '1003157',
			title: 'cats',
			image: 'https://cdn2.thecatapi.com/images/d8sbdRtLJ.jpg',
		});

		res.json({ body: record, status: 'sucess' });
		return;
	}
	res.status(400).json({ status: 'rejected' });
}

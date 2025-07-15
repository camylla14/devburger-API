import * as Yup from 'yup';

class ProductController {
	async store(request, response) {
		const schema = Yup.object({
			name: Yup.string().strict().required(),
			price: Yup.number().required(),  /** retirei o .strict pois não estava aceitando o numero que eu estava enviando */
			category: Yup.string().strict().required(),
		});

		try {
			schema.validateSync(request.body, { abortEarly: false });
		} catch (err) {
			return response.status(400).json({ error: err.errors });
		}

		return response.status(201).json({ message: 'ok' });
	}
}

export default new ProductController();

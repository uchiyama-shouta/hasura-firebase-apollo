import { gql } from "@apollo/client";

export const GET_NEWS = gql`
	query GetNews {
		news {
			id
			content
			created_at
		}
	}
`;

export const CREATE_NEWS = gql`
	mutation CreateNews($content: String!) {
		insert_news_one(object: { content: $content }) {
			id
			content
			created_at
		}
	}
`;

export const UPDATE_NEWS = gql`
	mutation UpdateNews($id: uuid!, $content: String!) {
		update_news_by_pk(pk_columns: { id: $id }, _set: { content: $content }) {
			id
			content
			created_at
		}
	}
`;

export const DELETE_NEWS = gql`
	mutation DeleteNews($id: uuid!) {
		delete_news_by_pk(id: $id) {
			id
			content
		}
	}
`;

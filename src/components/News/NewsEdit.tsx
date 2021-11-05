import { VFC, memo } from "react";
import { useHandleNews } from "src/hooks/useHandleNews";

const NewsEdit: VFC = () => {
	const {
		news,
		disabled,
		buttonText,
		createError,
		updateError,
		handleChange,
		handleSubmit,
	} = useHandleNews();

	if (createError || updateError) {
		return <div>Error</div>;
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="py-2 px-3 mb-3 border border-gray-300"
					placeholder="new news ?"
					value={news.content}
					onChange={handleChange}
				/>
				<button
					className="py-2 px-3 my-3 mx-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded disabled:opacity-40"
					disabled={disabled}
				>
					{buttonText}
				</button>
			</form>
		</div>
	);
};
export const NewsEditMemo = memo(NewsEdit);

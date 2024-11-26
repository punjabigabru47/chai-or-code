/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ obj }) => {
	console.log(obj);
	return (
		<>
			<div className="flex font-sans">
				<form className="flex-auto p-6">
					<div className="flex flex-wrap">
						<h1 className="flex-auto font-medium text-slate-900">
							Kids Jumpsuit
						</h1>
						<div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
							$39.00
						</div>
						<div className="text-sm font-medium text-slate-400">
							In stock
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default Card;

import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export function Home() {
	const context = useContext(Context)
	const [userDelete, setUserDelete] = useState("")

	return (
		<div className="container">
			<div className="d-flex justify-content-end">
				<Link className="btn btn-success mb-3" to="/add-contact">Add new contact</Link>
			</div>
			<div className="row d-flex justify-content-center contacts">
				{
					context.store.contacts.map((item) => {
						return (
							<div className="row contact">
								<div className="d-flex align-items-center col-12 col-md-7 gap-5">
									<img src="https://picsum.photos/id/237/180/180" className="rounded-circle" />
									<div className="ms-4">
										<h3>{item.name}</h3>
										<p className="contact-info fs-5"><i className="fa-solid fa-location-dot"></i> {item.address}</p>
										<p className="contact-info"><i className="fa-solid fa-phone"></i> {item.phone}</p>
										<p className="contact-info"><i className="fa-solid fa-envelope"></i> {item.email}</p>
									</div>
								</div>

								<div className="col-12 col-md-5 d-flex justify-content-end">
									<div>
										<Link className="btn me-3" to={`/edit-contact/${item.id}`}><i className="fa-solid fa-pen"></i></Link>
										<button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn" onClick={() => setUserDelete(item.id)}><i className="fa-solid fa-trash"></i></button>

										{/* Modal */}
										<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
											<div className="modal-dialog">
												<div className="modal-content">
													<div className="modal-header">
														<h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
														<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
													</div>
													<div className="modal-body">
														If you delete this thing the entire universe will go down!
													</div>
													<div className="modal-footer">
														<button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
														<button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
															context.actions.deleteContact(userDelete)
														}}>Yes baby!</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>

																				
						)
					})
				}
			</div>
		</div>
	)
};
'use client'
import React from 'react'
import Table from 'react-bootstrap/Table';

export default function ReportScope({ scope }) {
  return (
    <>
      <div className="text-title">
        GHG Emissions Report
      </div>
      <div className="pe-4">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-11">
            <Table borderless responsive>
              <thead className='text-head'>
                <tr className='bottom-border'>
                  <th className='w-50'>Category</th>
                  <th className='w-25'>Source</th>
                  <th className='w-25'>Emission (tCO2e)</th>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
      </div>

      <div className="v-scroll pe-4 ">
        <div className="" style={{ display: scope === 'Scope-1' || scope === 'All Scopes' ? 'block' : 'none' }}>
          <div className="text-gray">
            <div className="row">
              <div className="col-1 d-flex align-items-center justify-content-center">
                <div className="scope">
                  SCOPE-1
                </div>
              </div>
              <div className="col-11">

                <Table borderless responsive>
                  <thead className='text-head'>
                    <tr>
                      <th className='w-50'></th>
                      <th className='w-25'></th>
                      <th className='w-25'></th>
                    </tr>
                  </thead>
                  <tbody className='text-light'>
                    <tr >
                      <td rowSpan={4} className='align-middle pe-3'>
                        Direct emissions arising from the owned or controlled stationary sources that use fossil fuels and/or emit fugitive emissions
                      </td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Fuels</td>
                      <td>98.06</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Bioenergy</td>
                      <td>10.98</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Refrigerants</td>
                      <td>33.56</td>
                    </tr>
                    <tr>
                      <td rowSpan={3} className='align-middle pe-3'>
                        Direct emissions arising from the owned or controlled mobile sources
                      </td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Passenger vehicles</td>
                      <td>12.56</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Delivery vehicles</td>
                      <td>66.56</td>
                    </tr>
                    <tr className='text-green'>
                      <td></td>
                      <td>TOTAL</td>
                      <td>166.56</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ display: scope === 'Scope-2' || scope === 'All Scopes' ? 'block' : 'none' }}>
          <div className="text-gray">
            <div className="row">
              <div className="col-1 d-flex align-items-center justify-content-center">
                <div className="scope">
                  SCOPE-2
                </div>
              </div>
              <div className="col-11">

                <Table borderless responsive>
                  <thead className='text-head'>
                    <tr>
                      <th className='w-50'></th>
                      <th className='w-25'></th>
                      <th className='w-25'></th>
                    </tr>
                  </thead>
                  <tbody className='text-light'>
                    <tr >
                      <td rowSpan={5} className='align-middle pe-3'>
                        Location-based emissions from the generation of purchased electricity, heat, steam or cooling
                      </td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Electricity</td>
                      <td>98.06</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Heat & Steam</td>
                      <td>10.98</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Electricity for EV's</td>
                      <td>33.56</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>District Cooling</td>
                      <td>12.56</td>
                    </tr>
                    <tr className='text-green'>
                      <td></td>
                      <td>TOTAL</td>
                      <td>126.86</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ display: scope === 'Scope-3' || scope === 'All Scopes' ? 'block' : 'none' }}>
          <div className="text-gray">
            <div className="row">
              <div className="col-1 d-flex align-items-center justify-content-center">
                <div className="scope">
                  SCOPE-3
                </div>
              </div>
              <div className="col-11">

                <Table borderless responsive>
                  <thead className='text-head'>
                    <tr>
                      <th className='w-50'></th>
                      <th className='w-25'></th>
                      <th className='w-25'></th>
                    </tr>
                  </thead>
                  <tbody className='text-light'>
                    <tr >
                      <td rowSpan={3} className='align-middle pe-3'>
                        Fuel and energy related activities
                      </td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>All other fuel- and energy related activities</td>
                      <td>98.06</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Transmission and distribution losses</td>
                      <td>10.98</td>
                    </tr>
                    <tr >
                      <td rowSpan={3} className='align-middle pe-3'>
                        Waste generated in operations
                      </td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Waste water</td>
                      <td>33.56</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Bioenergy</td>
                      <td>12.56</td>
                    </tr>
                    <tr >
                      <td rowSpan={3} className='align-middle pe-3'>
                        Purchased goods
                      </td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Water supplied</td>
                      <td>33.56</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Material use</td>
                      <td>12.56</td>
                    </tr>
                    <tr >
                      <td rowSpan={5} className='align-middle pe-3'>
                        Business travel
                      </td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>All transportation by air</td>
                      <td>33.56</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>Emissions arising from hotel accommodation associated with business travel</td>
                      <td>12.56</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>All transportation by sea</td>
                      <td>12.56</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td>All transportation by land, public transport, rented/leased vehicle and taxi</td>
                      <td>12.56</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td className='align-middle pe-3'>
                        Upstream transportation and distribution
                      </td>
                      <td>Freighting goods</td>
                      <td>33.56</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td className='align-middle pe-3'>
                        Employees commuting
                      </td>
                      <td></td>
                      <td>33.56</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td className='align-middle pe-3'>
                        Food
                      </td>
                      <td></td>
                      <td>33.56</td>
                    </tr>
                    <tr className='bottom-border'>
                      <td className='align-middle pe-3'>
                        Home Office
                      </td>
                      <td></td>
                      <td>33.56</td>
                    </tr>



                    <tr className='text-green'>
                      <td></td>
                      <td>TOTAL</td>
                      <td>126.86</td>
                    </tr>
                    <tr className='sub-title2'>
                      <td></td>
                      <td>TOTAL EMISSIONS</td>
                      <td>126.86</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
